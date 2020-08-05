import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import videos from './modules/videos/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    videos,
  });
