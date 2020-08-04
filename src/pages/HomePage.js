import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoPlayer from "../components/VideoPlayer";
import { fetchVideos } from "../state/modules/videos/videos";

const HomePage = ({ fetchVideos, match}) => {
  useEffect(() => {
    fetchVideos();
  }, []);

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