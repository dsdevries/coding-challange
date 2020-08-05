import {createMatchSelector} from "connected-react-router";
import {RoutePaths} from "../../../Routes";
import {NAMESPACE, PAGE_SIZE} from "./const";

export const getSelectedVideo = state => state[NAMESPACE].data.find((video) => {
    const matchSelector = createMatchSelector(RoutePaths.HOME);
    const match = matchSelector(state);
    return video.slug === match.params.videoSelected;
})

const getData = state => {
    const selectedVideo = getSelectedVideo(state);

    return state[NAMESPACE].data.filter((video) => {
        return typeof selectedVideo === 'undefined' || video.name !== selectedVideo.name;
    }).sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });
}

export const getVideos = state => {
    const data = getData(state);
    const total_count = data.length;
    const page_count = Math.ceil(total_count / PAGE_SIZE);
    const searchParams = new URLSearchParams(state.router.location.search);
    const page = parseInt(searchParams.get('page')) || 1;

    searchParams.set('page', page + 1);

    return {
        page,
        per_page: PAGE_SIZE,
        page_count,
        total_count,
        links: {
            next: page === page_count ? null : `?${searchParams.toString()}`,
        },
        data: data.slice(0 , page * PAGE_SIZE),
    };
};
