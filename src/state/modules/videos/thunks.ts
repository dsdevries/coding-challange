import {AxiosResponse} from 'axios';

import {AppDispatch, AppThunk} from "../../../index";
import {apiGet} from "../../apiRequest";
import {hydrateVideoData} from "./actions";
import {VIDEOS_ENDPOINT, NAMESPACE} from "./const";
import {FetchVideoAction} from "./videos";

export const FETCH_VIDEOS:string = `${NAMESPACE}/FETCH_VIDEOS`;

export const fetchVideos = (): AppThunk => (dispatch:AppDispatch) => dispatch<FetchVideoAction>(apiGet(FETCH_VIDEOS, VIDEOS_ENDPOINT)).payload.then(
    (response:AxiosResponse) => {
        dispatch(hydrateVideoData(response.data.videos));
    },
);

