import { handleActions } from 'redux-actions';

import { NAMESPACE } from "./const";
import initialState from './initialState';

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

