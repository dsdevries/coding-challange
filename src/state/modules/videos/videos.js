import { handleActions, createAction } from 'redux-actions';
import { apiGet } from './apiRequest';

import initialState from './initial-state';

const NAMESPACE = 'submissions';
const VIDEOS_ENDPOINT = '/videos';

const FETCH_VIDEOS = `${NAMESPACE}/FETCH_VIDEOS`;
const HYDRATE_VIDEO_DATA = `${NAMESPACE}/HYDRATE_VIDEO_DATA`;

const videosReducer = handleActions(
    {
        [HYDRATE_VIDEO_DATA]: (state, { payload: data }) => ({
            ...state,
            videos: data,
        }),
    },
    initialState,
);

export default videosReducer;

// Action creators
export const hydrateVideoData = createAction(HYDRATE_VIDEO_DATA);

// Thunks
export const fetchVideos = () => dispatch => {
    return dispatch(apiGet(FETCH_VIDEOS, VIDEOS_ENDPOINT)).payload.then(
        response => {
            dispatch(hydrateVideoData(response.data));
        },
    );
};

// Selectors
export const getVideos = state => {
    console.log(state);
    return state.videos.videos;
};
