import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function VideoThumbnail({ src, name, onClick }) {
    return (
        <Wrapper
            onClick={onClick}
        >
            <img alt='name' src={src} />
            {name}
        </Wrapper>
    );
}