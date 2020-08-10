import {HYDRATE_VIDEO_DATA} from "./const";
import {createAction} from "redux-actions";
import {HydrateVideoDataAction} from "./videos";

export const hydrateVideoData = createAction<HydrateVideoDataAction>(HYDRATE_VIDEO_DATA);
