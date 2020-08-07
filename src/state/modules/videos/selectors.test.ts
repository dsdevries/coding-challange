import {createMatchSelector} from "connected-react-router";
import stubVideo from '../../../../test/stubVideo';
import stubVideos from "../../../../test/stubVideos";

import * as selectors from './selectors';
import {Video} from "./video";

jest.mock('connected-react-router');

const slug='stub-name';

describe("videos selectors", function() {
    it('Should return the selected video based on route', () => {
        const state = {
            videos: {
                data: [{
                    ...stubVideo,
                    slug
                }]
            }
        };

        (createMatchSelector as jest.Mock).mockImplementation(() => () => ({
            params: {
                videoSelected: slug
            }
        }));

        expect(selectors.getSelectedVideo(state)).toEqual({
            ...stubVideo,
            slug
        });
    });

    it('Should return undefined when no video is selected', () => {
        const state = {
            videos: {
                data: [{
                    ...stubVideo,
                    slug
                }]
            }
        };

        (createMatchSelector as jest.Mock).mockImplementation(() => () => ({
            params: {
                videoSelected: ''
            }
        }));

        expect(selectors.getSelectedVideo(state)).toBe(undefined);
    });

    it('Should return the first 5 video alphabetically ordered by name', () => {
        const state = {
            router: {
                location : {
                    search: '',
                },
            },
            videos: {
                data: stubVideos,
            },
        };

        (createMatchSelector as jest.Mock).mockImplementation(() => () => ({
            params: {
                videoSelected: ''
            }
        }));

        const result= selectors.getVideos(state);
        expect(result.data.length).toBe(5);
        expect(result.data[0].name).toEqual('stub name 1');
        expect(result.data[1].name).toEqual('stub name 10');
        expect(result.data[4].name).toEqual('stub name 4');
    });

    it('Should return the first 10 video alphabetically ordered by name when page 2 is queried', () => {
        const state = {
            router: {
                location : {
                    search: '?page=2',
                },
            },
            videos: {
                data: stubVideos,
            },
        };

        (createMatchSelector as jest.Mock).mockImplementation(() => () => ({
            params: {
                videoSelected: ''
            }
        }));

        const result= selectors.getVideos(state);
        expect(result.data.length).toBe(10);
        expect(result.data[0].name).toEqual('stub name 1');
        expect(result.data[1].name).toEqual('stub name 10');
        expect(result.data[9].name).toEqual('stub name 9');
    });

    it('Should exclude the selected video from the results', () => {
        const state = {
            router: {
                location : {
                    search: '?page=2',
                },
            },
            videos: {
                data: stubVideos,
            },
        };

        (createMatchSelector as jest.Mock).mockImplementation(() => () => ({
            params: {
                videoSelected: 'stub-slug-3'
            }
        }));

        const result= selectors.getVideos(state);
        expect(result.data.length).toBe(9);
        expect(result.data[0].name).toEqual('stub name 1');
        expect(result.data[1].name).toEqual('stub name 10');
        expect(result.data[4].name).toEqual('stub name 5');
        expect(result.data[8].name).toEqual('stub name 9');
        expect(result.data.find((video:Video) => {
            return video.name === 'stub name 3';
        })).toBe(undefined);
    });
});