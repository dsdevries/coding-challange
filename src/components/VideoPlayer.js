import React, { Fragment } from 'react';
import styled from 'styled-components';

import mediaQueries from "../data/mediaQueries";
import VideoList from './VideoList';
import VideoRectangle from './VideoRectangle';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    mid-width: 200px;
    display: flex;
    flex-direction: column;
    
    @media ${mediaQueries.MEDIUM} { 
        flex-direction: row;
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
