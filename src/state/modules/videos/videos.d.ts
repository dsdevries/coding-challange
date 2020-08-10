import {FETCH_VIDEOS, HYDRATE_VIDEO_DATA} from "./const";
import {AxiosResponse} from "axios";

export type Video = {
    name: string,
    path: string,
    thumbnail: string,
    slug?: string,
};

export type State = {
    data: Array<Video>
};

export type Videos = {
    page: number,
    per_page: number,
    page_count: number,
    total_count: number,
    links: {
        next: string | null
    },
    data: Array<Video>
};

export interface HydrateVideoDataAction {
    type: typeof HYDRATE_VIDEO_DATA,
    payload: Array<Video>,
}

export interface FetchVideoAction {
    type: typeof FETCH_VIDEOS,
    payload: Promise<AxiosResponse>,
}