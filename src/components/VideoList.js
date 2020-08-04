import React from 'react';
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import {getVideos} from "../state/modules/videos/videos";
import VideoThumbnail from './VideoThumbnail';
import PropTypes from "prop-types";

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
                videos && videos.data && videos.data.map((video, i) => {
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

VideoList.propTypes = {
    videos: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        videos: getVideos(state),
    };
};

export default connect(
    mapStateToProps,
)(VideoList);
