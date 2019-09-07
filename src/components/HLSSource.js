import React, { Component } from 'react';

/*
    This file is based on an example from the video-react docs. See
    how just below this comment we destructure a variable called Hls
    off of window? That's a class provided by the hls.js library that
    lets us use HLS technology to load and play our videos.

    Long story short, HLS is a protocol that lets us divide and
    conquer video files or streams so that we can play them in the
    most efficient manner. You can read more about it here:
    https://en.wikipedia.org/wiki/HTTP_Live_Streaming
*/

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
