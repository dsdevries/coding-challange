import React, { useEffect, useReducer } from 'react';
import './App.css';
import initialState from './state/initial-state';
import actions from './state/actions';
import rootReducer from './state/root-reducer';
import VideoPlayer from './components/VideoPlayer';
import videoData from './video-data.json';

function App() {

  const [state, dispatch] = useReducer(rootReducer, initialState);
  const { player: { videoSelected, videos }} = state;

  dispatch({
    type: actions.HYDRATE_VIDEO_DATA,
    payload: videoData
  });

  return (
    <div className="App">
      <VideoPlayer
        dispatch={dispatch}
        videoSelected={videoSelected}
        videos={videos}
      />
    </div>
  );
}

export default App;
