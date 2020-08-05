import videosReducer from './reducer';
import initialState from "./initialState";
import {HYDRATE_VIDEO_DATA} from "./const";

describe("videosReducer", function() {
    const stubVideo = {
        name: 'stub name',
        thumbnail: 'stub thumbnail',
        path: 'stub path',
    }

    const stubAction = {
        type: HYDRATE_VIDEO_DATA,
        payload: [stubVideo],
    }

    it("should hydrate video data", function() {
        expect(videosReducer(initialState, stubAction)).toEqual({
            data: [{
                ...stubVideo,
                slug: 'stub-name',
            }]
        });
    });
});