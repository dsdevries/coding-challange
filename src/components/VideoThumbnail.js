import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    width: 250px;
    position: relative;
    overflow: hidden;
    
    :after {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 50%;
    }
`;

const Title = styled.div`
    margin: 10px 0 23px;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 4px;
`;

export default function VideoThumbnail({ src, name, onClick }) {
    return (
        <Wrapper
            onClick={onClick}
        >
            <ImageContainer>
                <Image alt='name' src={src} />
            </ImageContainer>
            <Title>{name}</Title>
        </Wrapper>
    );
}