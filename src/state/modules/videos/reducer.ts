import { handleActions } from 'redux-actions';

import {HYDRATE_VIDEO_DATA} from "./const";
import initialState from './initialState';
import {Video} from "./video";

interface iHydrateVideoAction {
    payload: Array<Video>;
    type: string,
}

const videosReducer = handleActions(
    {
        [HYDRATE_VIDEO_DATA]: (state: any, action: iHydrateVideoAction ) => ({
            ...state,
            data: action.payload.map((video: Video) => ({
                ...video,
                // not sure if i was allowed to change json data, so doing it here. ideally this should be don on backend.
                slug: video.name.toLowerCase().replace(/ +/g, '-'),
            })),
        }),
    },
    initialState
);

export default videosReducer;

