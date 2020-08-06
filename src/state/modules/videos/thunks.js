import {apiGet} from "../../apiRequest";
import {NAMESPACE, VIDEOS_ENDPOINT} from "./const";
import {hydrateVideoData} from "./actions";

const FETCH_VIDEOS = `${NAMESPACE}/FETCH_VIDEOS`;

export const fetchVideos = () => dispatch => dispatch(apiGet(FETCH_VIDEOS, VIDEOS_ENDPOINT)).payload.then(
    response => {
        dispatch(hydrateVideoData(response.data.videos));
    },
);

