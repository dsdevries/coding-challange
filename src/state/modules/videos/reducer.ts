import { handleActions } from 'redux-actions';

import {HYDRATE_VIDEO_DATA} from "./const";
import initialState from './initialState';
import {iVideo} from "./video";

interface iHydrateVideoAction {
    payload: Array<iVideo>;
    type: string,
}

const videosReducer = handleActions(
    {
        [HYDRATE_VIDEO_DATA]: (state: any, action: iHydrateVideoAction ) => ({
            ...state,
            data: action.payload.map((video: iVideo) => ({
                ...video,
                // not sure if i was allowed to change json data, so doing it here. ideally this should be don on backend.
                slug: video.name.toLowerCase().replace(/ +/g, '-'),
            })),
        }),
    },
    initialState
);

export default videosReducer;

