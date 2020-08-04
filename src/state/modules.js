import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import videos from './modules/videos/videos';

export default history =>
  combineReducers({
    router: connectRouter(history),
    videos,
  });
