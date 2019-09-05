import React, { Component } from 'react';

// TODO: Explain HLS and give some context

const { Hls } = window;

export default class HLSSource extends Component {
    constructor(props, context) {
        super(props, context);
        this.hls = new Hls();
    }

    componentDidUpdate(prevProps) {
        const { src, video } = this.props;
        if (src !== prevProps.src) {
            if (Hls.isSupported()) {
                this.hls.loadSource(src);
                this.hls.attachMedia(video);
                this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                });
            }
        }
    }

    componentWillUnmount() {
        if (this.hls) {
            this.hls.destroy();
        }
    }

    render() {
        return (
            <source
                src={this.props.src}
                type={this.props.type || 'application/x-mpegURL'}
            />
        );
    }
}
