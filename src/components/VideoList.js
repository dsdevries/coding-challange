import React from 'react';
import { useHistory } from "react-router-dom";
import VideoThumbnail from './VideoThumbnail';
import styled from 'styled-components';
import {connect} from "react-redux";
import {getVideos} from "../state/modules/videos/videos";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const VideoList = ({ videos }) => {
    const history = useHistory();

    return (
        <Wrapper>
            <h2>Up Next:</h2>

            {
                videos.data.map((video, i) => {
                    return (
                        <VideoThumbnail
                            key={`${video.name}-thumbnail`}
                            name={video.name}
                            onClick={() => {
                                history.push(`/${video.slug}`)
                            }}
                            src={video.thumbnail}
                        />
                    );
                })
            }
        </Wrapper>
    );
}

const mapStateToProps = state => {
    return {
        videos: getVideos(state),
    };
};

export default connect(
    mapStateToProps,
)(VideoList);
