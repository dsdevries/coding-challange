import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import VideoPlayer from "../components/VideoPlayer";
import { fetchVideos } from "../state/modules/videos/thunks";

const HomePage = ({ fetchVideos}) => {
  useEffect(() => {
      fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      <VideoPlayer/>
    </div>
  );
};

HomePage.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    fetchVideos: payload => {
        dispatch(fetchVideos(payload));
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(HomePage);