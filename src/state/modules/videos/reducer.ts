import { handleActions } from 'redux-actions';

import {HYDRATE_VIDEO_DATA} from "./const";
import initialState from './initialState';
import {State, Video, HydrateVideoDataAction} from './videos';

const videosReducer = handleActions(
    {
        [HYDRATE_VIDEO_DATA]: (state: State, action: HydrateVideoDataAction ):State => ({
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

