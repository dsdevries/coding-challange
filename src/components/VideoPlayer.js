import React, { Fragment } from 'react';
import VideoList from './VideoList';
import VideoPane from './VideoPane';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    mid-width: 200px;
    display: flex;
    flex-direction: row;
`;

export default function VideoPlayer({ dispatch, videoSelected, videos }) {
    return (
        <Fragment>
            <h1>Video Player</h1>
            <PlayerWrapper>
                <VideoPane />
                <VideoList
                    dispatch={dispatch}
                    videos={videos}
                />
            </PlayerWrapper>
        </Fragment>
    );
}
