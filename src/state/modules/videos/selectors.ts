import {match} from 'react-router';
import {NAMESPACE, PAGE_SIZE} from "./const";
import {Video, Videos} from "./videos";

interface RouteMatch extends match {
    params : {
        videoSelected? : string
    }
}

export const getSelectedVideo = (state: any, match:RouteMatch):Video => {
    return state[NAMESPACE].data.find((video:Video) => {
        return video.slug === match?.params.videoSelected;
    });
};

const getData = (state:any, match:RouteMatch):Array<Video> => {
    const selectedVideo = getSelectedVideo(state, match);

    return state[NAMESPACE].data.filter((video:Video) => {
        return typeof selectedVideo === 'undefined' || video.name !== selectedVideo.name;
    }).sort((a:Video, b:Video) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
};

export const getVideos = (state: any, match:RouteMatch):Videos => {
    const data = getData(state, match);
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
