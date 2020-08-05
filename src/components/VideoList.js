import React from 'react';
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

import mediaQueries from "../data/mediaQueries";
import {getVideos} from "../state/modules/videos/selectors";
import VideoThumbnail from './VideoThumbnail';
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${mediaQueries.MEDIUM} { 
        margin-left: 50px;
    }
`;

const Title = styled.h2`
    margin-top: 32px;
`;

const ScrollWrapper = styled.div`
    overflow: scroll;
    height: 500px;
    padding-right: 20px;
    margin-right: -20px;
    
    @media ${mediaQueries.MEDIUM} { 
        max-height: calc(100vh - 120px);
    }
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
            <Title>Up Next</Title>
            <ScrollWrapper>
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
            </ScrollWrapper>
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
