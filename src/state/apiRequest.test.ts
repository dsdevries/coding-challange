import configureMockStore, {MockStore} from 'redux-mock-store'
import thunk from 'redux-thunk'

import gateway from "../util/gateway";
import * as requestMethods from './apiRequest';
import {apiRequest} from "./apiRequest";

jest.mock('../util/gateway');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const TEST_ACTION= 'TEST_ACTION';
const TEST_PATH= 'TEST_PATH';
const TEST_DATA= {};
const TEST_OPTIONS= {};

const expectedActions = [{"meta": {"api": {"data": {}, "options": {}}}, "type": "TEST_ACTION"}];

describe("apiRequest", function() {
    let store:MockStore;

    beforeEach(function() {
        store = mockStore({});
    });

    it("should create an action and call the gateway without data when method is get", function () {
        store.dispatch(requestMethods.apiRequest(
            'get',
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.get).toHaveBeenCalledWith(TEST_PATH, TEST_OPTIONS);
    })

    it("should create an action and call the gateway without data when method is get", function () {
        store.dispatch(requestMethods.apiRequest(
            'delete',
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.delete).toHaveBeenCalledWith(TEST_PATH, TEST_OPTIONS);
    })

    it("should create an action and call the gateway without data when method is get", function () {
        store.dispatch(requestMethods.apiRequest(
            'post',
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.post).toHaveBeenCalledWith(TEST_PATH, TEST_DATA, TEST_OPTIONS);
    })

    it("should call apiRequest with get as method passing all other arguments", function () {
        store.dispatch(requestMethods.apiGet(
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.get).toHaveBeenCalledWith(TEST_PATH, TEST_OPTIONS);
    });

    it("should call apiRequest with post as method passing all other arguments", function () {
        store.dispatch(requestMethods.apiPost(
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.post).toHaveBeenCalledWith(TEST_PATH, TEST_DATA, TEST_OPTIONS);
    });

    it("should call apiRequest with put as method passing all other arguments", function () {
        store.dispatch(requestMethods.apiPut(
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.put).toHaveBeenCalledWith(TEST_PATH, TEST_DATA, TEST_OPTIONS);
    });

    it("should call apiRequest with patch as method passing all other arguments", function () {
        store.dispatch(requestMethods.apiPatch(
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.patch).toHaveBeenCalledWith(TEST_PATH, TEST_DATA, TEST_OPTIONS);
    });

    it("should call apiRequest with delete as method passing all other arguments", function () {
        store.dispatch(requestMethods.apiDelete(
            TEST_ACTION,
            TEST_PATH,
            TEST_DATA,
            TEST_OPTIONS
        ));

        expect(store.getActions()).toEqual(expectedActions);
        expect(gateway.delete).toHaveBeenCalledWith(TEST_PATH, TEST_OPTIONS);
    });
});