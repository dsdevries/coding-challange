import {AxiosResponse} from 'axios';
import {apiGet} from "../../apiRequest";
import {NAMESPACE, VIDEOS_ENDPOINT} from "./const";
import {hydrateVideoData} from "./actions";
import {AppDispatch} from "../../../index";

const FETCH_VIDEOS = `${NAMESPACE}/FETCH_VIDEOS`;

export const fetchVideos = () => (dispatch:AppDispatch) => dispatch<any>(apiGet(FETCH_VIDEOS, VIDEOS_ENDPOINT)).payload.then(
    (response:AxiosResponse) => {
        dispatch(hydrateVideoData(response.data.videos));
    },
);

