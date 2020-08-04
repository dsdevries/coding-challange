import React from 'react';
import { useHistory } from "react-router-dom";
import VideoThumbnail from './VideoThumbnail';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function VideoList({ dispatch, videos }) {
    const history = useHistory();

    return (
        <Wrapper>
            <h2>Up Next:</h2>

            {
                videos.slice(0, 3).map((video, i) => {
                    return (
                        <VideoThumbnail
                            dispatch={dispatch}
                            key={`${video.name}-thumbnail`}
                            name={video.name}
                            onClick={() => {
                                history.push(`/${i}`)
                            }}
                            src={video.thumbnail}
                        />
                    );
                })
            }
        </Wrapper>
    );
}
