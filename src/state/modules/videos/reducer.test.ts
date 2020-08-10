import stubVideo from '../../../../test/stubVideo';

import videosReducer from './reducer';
import initialState from "./initialState";
import {HYDRATE_VIDEO_DATA} from "./const";
import {HydrateVideoDataAction} from "./videos";

describe("videos reducer", function() {
    const stubAction:HydrateVideoDataAction = {
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