import styled from "styled-components";

export const EmotionButton = styled.button`
    width: 70px;
    height: 70px;
    border: 2px dotted rgb(85, 85, 85);
    border-radius: 100%;
    background: ${(props) => `url(${props.bgImage}) no-repeat center/cover`};
    margin: 5px;
    outline: none;
    cursor: pointer;
    
`;

export const EmotionSelectionContainer = styled.div`
    position : absolute;
    width: 400px;
    height: 60px;
    display: flex;
    gap: 5px;
    padding: 10px;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    border: 3px solid rgba(255, 255, 255, 1);
`;

export const EmotionOption = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid transparent;
    cursor: pointer;
    margin-bottom: 0;

    &:hover {
        border: 2px solid white;
    }

    &.selected {
        border: 2px solid yellow;
    }
`;

export const EmotionOptionLabel = styled.p`
    margin-top: 0;
    font-size: 10px;
    font-weight: 500;
    line-height: 15.51px;
    letter-spacing: -0.025em;
    text-align: center;
`;
