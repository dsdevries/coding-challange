import {createMatchSelector} from "connected-react-router";
import {match} from 'react-router';
import {RoutePaths} from "../../../Routes";
import {NAMESPACE, PAGE_SIZE} from "./const";
import {Video} from "./video";

interface routeMatch extends match {
    params : {
        videoSelected? : string
    }
}

export const getSelectedVideo = (state: any) => state[NAMESPACE].data.find((video:Video) => {
    const matchSelector = createMatchSelector(RoutePaths.HOME);
    const match:routeMatch|null = matchSelector(state);
    return video.slug === match?.params.videoSelected;
})

const getData = (state:any) => {
    const selectedVideo = getSelectedVideo(state);

    return state[NAMESPACE].data.filter((video:Video) => {
        return typeof selectedVideo === 'undefined' || video.name !== selectedVideo.name;
    }).sort((a:Video, b:Video) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
}

export const getVideos = (state: any) => {
    const data = getData(state);
    const total_count = data.length;
    const page_count = Math.ceil(total_count / PAGE_SIZE);
    const searchParams = new URLSearchParams(state.router.location.search);
    const page = parseInt(searchParams.get('page') || '1');

    searchParams.set('page', (page + 1).toString());

    return {
        page,
        per_page: PAGE_SIZE,
        page_count,
        total_count,
        links: {
            next: page >= page_count ? null : `?${searchParams.toString()}`,
        },
        data: data.slice(0 , page * PAGE_SIZE),
    };
};
