import { NavLink } from "react-router-dom";
import styled from "styled-components";

// `styled.text` 대신에 `styled.span`이나 `styled.p` 사용
export const IntroText = styled.span`
    margin-top: 20px;
    &.theme {
        font-size: 16px;
        font-weight: 700;
        line-height: 19.09px;
        letter-spacing: -0.025em;
        text-align: center;
        color: rgb(85, 85, 85);
        margin-bottom: 10px;
        text-decoration: underline;
    }
    &.date {
        font-size: 14px;
        font-weight: 500;
        line-height: 16.71px;
        letter-spacing: -0.025em;
        text-align: center;
        color: rgb(108, 108, 108);
        margin-bottom: 5px;
    }
    &.emotion {
        font-size: 12px;
        font-weight: 600;
        line-height: 14.52px;
        text-align: center;
        color: rgb(85, 85, 85);
        margin-top: 10px;
        margin-bottom: 5px;
    }
`;

export const WriteBox = styled.textarea`
    width: 270px;
    background: rgb(208, 218, 232);
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.73px;
    text-align: left;
    margin: 10px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap;
    resize: none;
    overflow-y: auto;

    &.title {
        height: 17px;
        margin-bottom: 0;
        overflow-x: auto;
        white-space: nowrap;
    }
    
    &.detail {
        height: 180px;
        padding: 10px 15px;
    }
`;

export const Emotion = styled.button`
    width: 70px;
    height: 70px;
    border: 2px dotted rgb(85, 85, 85);
    border-radius: 100%;
    background: rgb(242, 242, 241);
    margin: 5px;
    position: relative;
`;

export const Done = styled(NavLink)`
    width: 280px;
    height: 20px;
    margin: 10px;
    padding: 10px;
    background: rgb(208, 218, 232);
    border: 1px solid rgba(187, 215, 255, 1);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400; 
    line-height: 16.94px;
    color: rgb(85, 85, 85);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const PublicDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 17px;
`;

export const PublicButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !['active'].includes(prop),
})`
    width: 142px;
    height: 43px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: center;
    color: rgba(85, 85, 85, 1);
    border-radius: 10px;
    background: ${(props) => (props.active ? 'rgb(147, 186, 243)' : 'rgb(208, 218, 232)')};
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;
