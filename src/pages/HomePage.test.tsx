import React from 'react';
import HomePage from "./HomePage";
import { fetchVideos } from "../state/modules/videos/thunks";
import { renderWithStore } from '../../test/testUtils';

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
        const container = renderWithStore(<HomePage/>);

        expect(fetchVideos).toHaveBeenCalled();
        expect(container.queryByTestId('mockPlayer')).toBeVisible();
    });
});