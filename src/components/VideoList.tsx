import React from 'react';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import { useHistory } from "react-router-dom";
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

import mediaQueries from "../enum/mediaQueries";
import {getVideos} from "../state/modules/videos/selectors";
import {Video} from "../types/app-types";
import VideoThumbnail from './VideoThumbnail';
import {RootState} from "../index";

interface VideoListProps extends RouteComponentProps {
    videos: {
        page: number,
        per_page: number,
        page_count: number,
        total_count: number,
        links: {
            next: string | null
        },
        data: Array<Video>,
    };
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    
    @media ${mediaQueries.MEDIUM} { 
        margin-left: 50px;
        overflow: visible;
    }
`;

const Title = styled.h2`
    margin-top: 15px;
    
    @media ${mediaQueries.MEDIUM} { 
        margin-top: 32px;
    }
`;

const ScrollWrapper = styled.div`
    overflow: scroll;
    padding-right: 20px;
    margin-right: -20px;
    height: 100%;
    
    @media ${mediaQueries.MEDIUM} { 
        height: calc(100vh - 120px);
    }
`;

const VideoList = ({ videos }: VideoListProps) => {
    const history = useHistory();

    const handleWaypointEnter = () => {
        if (videos?.links?.next) {
            history.push({
                search: videos.links.next,
            });
        }
    }

    return (
        <Wrapper>
            <Title>Up Next</Title>
            <ScrollWrapper>
                {
                    videos?.data?.map((video) => {
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
                <Waypoint onEnter={handleWaypointEnter} />
            </ScrollWrapper>
        </Wrapper>
    );
}

const mapStateToProps = (state:RootState, ownProps:RouteComponentProps) => {
    return {
        videos: getVideos(state, ownProps.match),
    };
};

export default withRouter(connect(
    mapStateToProps,
)(VideoList));
