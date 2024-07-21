import styled from 'styled-components';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const UserPageContainer = styled.div`
    display: flex;  
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100dvw;
    height: 100vh;
    padding-top: 86px;
`;
export const IntroContainer = styled.div`
    display: flex;  
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    width: 100dvw;
    height: auto;
    h1 {
        font-size: 24px;
        font-weight: 700;
        font-family: Pretendard, sans-serif;
        color: #55555;
        margin-bottom: 10px;
    }
    p {
        font-weight: 300;
        font-size: 12px;
        font-family: Pretendard, sans-serif;
        margin : 0px 0;
    }
`;
