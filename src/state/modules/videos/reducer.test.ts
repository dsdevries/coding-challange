import stubVideo from '../../../../test/stubVideo';

import videosReducer from './reducer';
import initialState from "./initialState";
import {HYDRATE_VIDEO_DATA} from "./const";

describe("videos reducer", function() {
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