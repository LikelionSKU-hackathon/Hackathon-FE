import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 100vh;
    background-size: cover; 
    background-repeat: no-repeat;
    background-image: url(${props => props.background});
`;
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
export const Word = styled.img`
    width: 36dvw;
    height: 44dvh;
    position: absolute;
    top: 40px;
    right: 30px;
    animation: ${fadeIn} 2s ease-in-out 1s forwards;
`;
