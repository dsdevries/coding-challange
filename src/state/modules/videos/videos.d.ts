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