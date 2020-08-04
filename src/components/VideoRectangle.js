import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';
import { getSelectedVideo } from "../state/modules/videos/videos";
import HLSSource from './HLSSource';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
    width: 50%;
`;

const VideoRectangle = ({ videoSelected }) => {
    const [videoSource, setVideoSource] = useState(null);

    useEffect(() => {
        setVideoSource(videoSelected && videoSelected.path || '');
    }, [videoSelected, videoSource]);

    return (
        <Wrapper>
            <h1>Video Player</h1>
            <Player>
                <HLSSource
                    isVideoChild
                    src={videoSource}
                />
                <ControlBar>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                    <VolumeMenuButton disabled />
                </ControlBar>
            </Player>
        </Wrapper>
    );
}

VideoRectangle.propTypes = {
    videoSelected: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        videoSelected: getSelectedVideo(state),
    };
};

export default connect(
    mapStateToProps,
)(VideoRectangle);
