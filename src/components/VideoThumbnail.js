import React from 'react';

export default function VideoThumbnail({ src, name, index }) {
    return (
        <div>
            <img alt='name' src={src} />
        </div>
    );
}