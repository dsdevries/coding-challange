import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import VideoPlayer from "../components/VideoPlayer";
import { fetchVideos } from "../state/modules/videos/thunks";

type HomePagesProps = {
    fetchVideos: () => void
}

const HomePage = ({ fetchVideos}: HomePagesProps) => {
  useEffect(() => {
      fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      <VideoPlayer/>
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => ({
    fetchVideos: () => {
        dispatch(fetchVideos());
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(HomePage);