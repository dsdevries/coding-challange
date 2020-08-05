import React from 'react';
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

import {getVideos} from "../state/modules/videos/videos";
import VideoThumbnail from './VideoThumbnail';
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ScrollContainer = styled.div`
    overflow: scroll;
    height: 500px;
`;

const VideoList = ({ videos }) => {
    const history = useHistory();

    const handleWaypointEnter = () => {
        if (!videos || !videos.links || !videos.links.next) {
            return;
        }
        
        history.push({
            search: videos.links.next,
        });
    }

    return (
        <Wrapper>
            <h2>Up Next:</h2>
            <ScrollContainer>
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
                <Waypoint onEnter={handleWaypointEnter}></Waypoint>
            </ScrollContainer>
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
