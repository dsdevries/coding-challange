import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const { Hls } = window;

const Video = styled.video`
    width: 60vw;
    height: 60vw;
    background-color: black;
`;

export default function VideoPane({ videoSelected, videos }) {

    const videoEl = useRef(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.attachMedia(videoEl);
            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                console.log("video and hls.js are now bound together !");
                hls.loadSource(videos[videoSelected].src);
                hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                    console.log("manifest loaded, found " + data.levels.length + " quality level");
                });
            });
          }
    }, [videoSelected, videos]);

    return (
        <Video
            ref={videoEl}
        />
    );
}