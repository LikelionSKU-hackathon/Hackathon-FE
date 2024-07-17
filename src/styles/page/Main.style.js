import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
    width: 280px;
    height: 45px;
    background: rgb(245,245,245);
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 12px;
    font-weight: 400;
    white-space: pre-line;
    margin: 20px;
    padding: 10px;
`;

export const TextDiv = styled.div`
    width : 300px;
    font-family : Pretendard;
    display : flex;
    align-items:: flex-start;
    gap: 0px;
    flex-direction: column;
    >h6 {
        font-weight : 600;
        font-size : 32px;
        text-align : left;
        margin-top: 100px;
        margin-bottom : 0;
    }
    >p {
        font-weitht : 400;
        font-size : 18px;
        margin-top : 0;
        color : rgba(111, 112, 117, 1);
    }


`;

export const ButtonBox = styled.button`
    width: 300px;
    height: 65px;
    background: rgb(245,245,245);
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 14px;
    font-weight: 800;
    white-space: pre-line;
    margin: 20px;
    padding: 10px;
    justify-content: center;
    border-radius: 0px;
`;

export const ProfileBox = styled.div`
    width: 280px;
    height: 50px;
    margin: 20px;
    padding: 10px;
    background: rgba(0,0,0,0.25);
    border-radius: 100px;
    align-items: center;
    padding: 10px;
    display: flex;

    
`;

export const ScrollBox = styled.div`
    width: 100%; /* 부모 요소의 너비에 맞춤 */
    height: 140px;
    font-weight: 400;
    font-size: 9px;
    overflow-x: auto; /* 가로 스크롤 활성화 */
    white-space: nowrap; /* 자식 요소들이 가로로 일렬로 배치되도록 함 */
    display: flex; /* 플렉스 박스 속성 */
    align-items: center;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export const DiaryButton = styled(NavLink)`
    width: 130px;
    height: 80px;
    margin: 10px; /* 버튼 사이 간격 조정 */
    padding: 10px;
    white-space: normal; /* 텍스트 자동 줄바꿈 */
    display: inline-block;
    border-radius: 10px;
    text-align: left;
    color : rgb(0,0,0);
    &.free {
        background : rgb(178,134,255);
    }

    &.daily {
        background : rgb(220, 243, 51);
    }
    
    >p {
        font-weight: 400;
        font-size: 14px;
        font-family : Pretendard;
        margin : 0;
        color : black;
    }
`;

export const Circle = styled.div`
    background: rgb(217,217,217);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
`;

export const FreeButton = styled.button`
    background-image : url('src/assets/Home/FreeTheme.svg');
    width : 158px;
    height : 97px;
`;
