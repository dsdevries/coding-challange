import { handleActions } from 'redux-actions';

import {HYDRATE_VIDEO_DATA} from "./const";
import initialState from './initialState';
import {State, Video} from './videos';

type HydrateVideoAction = {
    payload: Array<Video>;
    type: string,
}

const videosReducer = handleActions(
    {
        [HYDRATE_VIDEO_DATA]: (state: State, action: HydrateVideoAction ) => ({
            ...state,
            data: action.payload.map((video: Video) => ({
                ...video,
                // not sure if i was allowed to change json enum, so doing it here. ideally this should be don on backend.
                slug: video.name.toLowerCase().replace(/ +/g, '-'),
            })),
        }),
    },
    initialState
);

export default videosReducer;

