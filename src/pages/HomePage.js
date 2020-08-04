import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoPlayer from "../components/VideoPlayer";
import actions from "../state/modules/videos/actions";
import videoData from "../video-data.json";
import {getVideos} from "../state/modules/videos/videos";

const HomePage = props => {
    const {
        match: {params: {videoSelected}},
        videos
    } = props;

  useEffect(() => {
    props.hydrateVideoData();
  }, []);

  return (
    <div>
      <VideoPlayer
          videoSelected={videoSelected}
          videos={videos}
      />
    </div>
  );
};

HomePage.propTypes = {
  hydrateVideoData: PropTypes.func.isRequired,
  location: PropTypes.object,
  videos: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    videos: getVideos(state),
  };
};

const mapDispatchToProps = dispatch => ({
  hydrateVideoData: () => dispatch({
      type: actions.HYDRATE_VIDEO_DATA,
      payload: videoData.videos
  }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);