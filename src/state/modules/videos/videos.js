import { handleActions, createAction } from 'redux-actions';
import { createMatchSelector } from 'connected-react-router';
import {RoutePaths} from "../../../Routes";

import { apiGet } from './apiRequest';
import initialState from './initial-state';

const PAGE_SIZE = 5;
const NAMESPACE = 'videos';
const VIDEOS_ENDPOINT = '/videos';

const FETCH_VIDEOS = `${NAMESPACE}/FETCH_VIDEOS`;
const HYDRATE_VIDEO_DATA = `${NAMESPACE}/HYDRATE_VIDEO_DATA`;

const videosReducer = handleActions(
    {
        [HYDRATE_VIDEO_DATA]: (state, { payload: data }) => ({
            ...state,
            data: data.map((video) => ({
                ...video,
                // not sure if i was allowed to change json data, so doing it here. ideally this should be don on backend.
                slug: video.name.toLowerCase().replace(/ +/g, '-'),
            })),
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
// export const getVideos = state => {
//     console.log(state);
//     return state.videos.videos;
// };

export const getSelectedVideo = state => state[NAMESPACE].data.find((video) => {
    console.log(state);
    const matchSelector = createMatchSelector(RoutePaths.HOME);
    const match = matchSelector(state);
    return video.slug === match.params.videoSelected;
})


export const getVideos = state => {
    const searchParams = new URLSearchParams(state.router.location.search);
    const nextSearchParams = new URLSearchParams(state.router.location.search);

    const page = parseInt(searchParams.get('page')) || 1;
    const data = state[NAMESPACE].data;

    const total_count = data.length;
    const page_count = Math.ceil(total_count / PAGE_SIZE);

    nextSearchParams.set('page', page + 1);

    return {
        page,
        per_page: PAGE_SIZE,
        page_count,
        total_count,
        links: {
            next: page === page_count ? null : `?${nextSearchParams.toString()}`,
        },
        data: data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    };
};
