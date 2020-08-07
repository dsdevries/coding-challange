import React, { useEffect, useState} from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
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

import mediaQueries from "../enum/mediaQueries";
import { getSelectedVideo } from "../state/modules/videos/selectors";
import {Video} from "../types/app-types";
import HLSSource from './HLSSource';
import {RootState} from "../index";

type VideoRectangleProps = {
    videoSelected: Video
};

const Wrapper = styled.div`
    width: 100%;
`;

const VideoContainer = styled.div`
    height: 35vh;

    @media ${mediaQueries.MEDIUM} { 
        height: calc(100vh - 120px);
    }
`;

const VideoRectangle = ({ videoSelected }: VideoRectangleProps) => {
    const [videoSource, setVideoSource] = useState<string>('');

    useEffect(() => {
        setVideoSource(videoSelected?.path || '');
    }, [videoSelected, videoSource]);

    return (
        <Wrapper>
            <h1>{videoSelected && videoSelected.name}</h1>
            <VideoContainer>
                <Player
                    height={'100%'}
                    width={'100%'}
                    fluid={false}
                >
                    <HLSSource src={videoSource} />
                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
            </VideoContainer>
        </Wrapper>
    );
}

const mapStateToProps = (state:RootState) => {
    return {
        videoSelected: getSelectedVideo(state),
    };
};

export default connect(
    mapStateToProps,
)(VideoRectangle);
