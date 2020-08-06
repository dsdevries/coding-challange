import React from 'react';
import { render } from '@testing-library/react';
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

function renderWithStore(
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
    return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
export * from '@testing-library/jest-dom';

// override render method
export { renderWithStore }