import {NAMESPACE} from "./const";
import {createAction} from "redux-actions";

const HYDRATE_VIDEO_DATA = `${NAMESPACE}/HYDRATE_VIDEO_DATA`;

export const hydrateVideoData = createAction(HYDRATE_VIDEO_DATA);
