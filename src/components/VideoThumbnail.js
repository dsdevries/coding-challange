import React from 'react';
import styled from 'styled-components';

import mediaQueries from "../data/mediaQueries";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media ${mediaQueries.MEDIUM} { 
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    width: 200px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    
    @media ${mediaQueries.MEDIUM} { 
        width: 250px;
    }
    
    :after {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 50%;
    }
`;

const Title = styled.div`
    margin: 0 0 25px 25px;
    
    @media ${mediaQueries.MEDIUM} { 
        margin: 0 0 25px;
    }
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
            data-testid='thumbnail-wrapper'
        >
            <ImageContainer>
                <Image alt='name' src={src} data-testid='thumbnail-image'/>
            </ImageContainer>
            <Title data-testid='thumbnail-title'>{name}</Title>
        </Wrapper>
    );
}