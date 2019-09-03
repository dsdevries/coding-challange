import React from 'react';
import actions from '../state/actions';
import VideoThumbnail from './VideoThumbnail';

export default function VideoList({ dispatch, videos }) {
    return (
        videos.map((vid, i) => {
            return (
                <VideoThumbnail
                    dispatch={dispatch}
                    name={vid.name}
                    onClick={() => dispatch({ type: actions.SELECT_VIDEO, payload: i })}
                    src={vid.src}
                />
            );
        })
    );
}