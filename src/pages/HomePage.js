import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoPlayer from "../components/VideoPlayer";
import {fetchVideos, getVideos} from "../state/modules/videos/videos";

const HomePage = props => {
    const {
        match: {params: {videoSelected}},
        videos
    } = props;

  useEffect(() => {
    props.fetchVideos();
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
  fetchVideos: PropTypes.func.isRequired,
  location: PropTypes.object,
  videos: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    videos: getVideos(state),
  };
};

const mapDispatchToProps = dispatch => ({
    fetchVideos: payload => {
        dispatch(fetchVideos(payload));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);