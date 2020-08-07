import React from "react";
import {fireEvent} from "@testing-library/dom";

import {render} from "../../test/testUtils";
import VideoThumbnail from "./VideoThumbnail";
import {RenderResult} from "@testing-library/react";

const MOCK_THUMBNAIL_NAME='MOCK_THUMBNAIL_NAME';
const MOCK_THUMBNAIL_SRC='MOCK_THUMBNAIL_SRC';
const mockOnClick = jest.fn();

describe("VideoThumbnail", function() {
    let container:RenderResult;

    beforeEach(() => {
        container = render(<VideoThumbnail
            name={MOCK_THUMBNAIL_NAME}
            src={MOCK_THUMBNAIL_SRC}
            onClick={mockOnClick}
        />, {});
    });

    it('Should render the VideoThumbnail', () => {
        expect(container.queryByTestId('thumbnail-wrapper')).toBeVisible();
        // @ts-ignore
        expect(container.queryByTestId('thumbnail-image').src).toBe(`http://localhost/${MOCK_THUMBNAIL_SRC}`);
        // @ts-ignore
        expect(container.queryByTestId('thumbnail-title').innerHTML).toBe(MOCK_THUMBNAIL_NAME);
    });

    it('Should fire onClick when user clicks on the thumbnail', () => {
        // @ts-ignore
        fireEvent.click(container.queryByTestId('thumbnail-wrapper'));
        expect(mockOnClick).toHaveBeenCalled();
    });
});