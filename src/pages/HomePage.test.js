import React from 'react';
import '@testing-library/jest-dom';
import HomePage from "./HomePage";
import { fetchVideos } from "../state/modules/videos/thunks";
import {render} from '../../test/testUtils';

jest.mock('../components/VideoPlayer' , () => {
    return {
        __esModule: true,
        default: () => <div data-testid='mockPlayer'>mock video player</div>,
    };
});
jest.mock('../state/modules/videos/thunks', () => ({
    fetchVideos: jest.fn(() => jest.fn(() => Promise.resolve())),
}));

describe("HomePage", function() {
    it('Should render the HomePage and fetch the videos', () => {
        const container = render(<HomePage/>, {});

        expect(fetchVideos).toHaveBeenCalled();
        expect(container.queryByTestId('mockPlayer')).toBeVisible();
    });
});