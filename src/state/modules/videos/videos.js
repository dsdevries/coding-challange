import { handleActions, createAction } from 'redux-actions';

import initialState from './initial-state';
import actions from './actions';

const videosReducer = handleActions(
    {
        [actions.HYDRATE_VIDEO_DATA]: (state, { payload: data }) => ({
            ...state,
            videos: data,
        }),
    },
    initialState,
);

export default videosReducer;

// Action creators
export const hydrateVideoData = createAction(actions.HYDRATE_VIDEO_DATA);

// Selectors
export const getVideos = state => {
    console.log(state);
    return state.videos.videos;
};
