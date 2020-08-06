import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import {createBrowserHistory} from "history";
import createRootReducer from "../src/state/createRootReducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const history = createBrowserHistory();
const middleware = [
    thunk
];

function render(
    ui,
    {
        initialState,
        store = createStore(
            createRootReducer(history),
            initialState,
            applyMiddleware(...middleware),
        ),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }