import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import * as thunks from "./thunks";
import {apiGet} from "../../apiRequest";

jest.mock('../../apiRequest');

const stubData = [{
    name: 'stub name',
    thumbnail: 'stub thumbnail',
    path: 'stub path',
}];

const mockPromise = Promise.resolve({
    data: stubData
});

apiGet.mockImplementation(()=> {
    return {
        type: 'videos/FETCH_VIDEOS',
        payload: mockPromise,
    };
})

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const expectedActions = [
    { type: 'videos/FETCH_VIDEOS', payload: mockPromise },
    { type: 'videos/HYDRATE_VIDEO_DATA', payload: stubData },
]

describe("videos thunks", function() {
    let store;

    beforeEach(function () {
        store = mockStore({});
    });

    it("should fetch the videos and dispatch an action to hydrate the videos in the store", function () {
        return store.dispatch(thunks.fetchVideos()).then((result)=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
});