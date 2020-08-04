import React, { Fragment } from 'react';
import VideoList from './VideoList';
import VideoRectangle from './VideoRectangle';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    mid-width: 200px;
    display: flex;
    flex-direction: row;
    
    VideoList {
        margin-left: 15px;
    }
`;

const VideoPlayer = () => (
    <Fragment>
        <Wrapper>
            <VideoRectangle />
            <VideoList />
        </Wrapper>
    </Fragment>
);

export default VideoPlayer;
