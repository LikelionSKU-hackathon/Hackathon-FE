import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BG from "../../assets/BG_Paper.png";

// QBox의 question 클래스 배경색 랜덤 배열
const questionColors = [
  'linear-gradient(97.42deg, #458FFF 0.29%, #F38B8B 50.17%, #82B6FF 99.06%)',
  'linear-gradient(84.14deg, #80FF00 4.52%, #FEE33A 48.88%, #FF3838 92.35%)',
  'linear-gradient(89.97deg, #005DE4 0.02%, #BBD7FF 50.5%, #A68BF3 99.97%)',
  'linear-gradient(89.97deg, #133D7A 0.02%, #FE3A3A 50.5%, #F3E493 99.97%)',
  'linear-gradient(82.98deg, #FEE33A 2.56%, #6BD34D 49.21%, #45B1FF 98.95%)',
];

export const ChangeButton = styled.button`
  width: 330px;
  height: 40px;
  background: rgba(164, 213, 255, 1);
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  white-space: pre-line;
  margin-top: 7px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid rgb(208, 218, 232);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color : #000000;
`;

export const QBox = styled.div`
  width: 300px;
  border: 1px solid rgb(208, 218, 232);
  border-radius: 10px;
  margin: 10px;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &.question {
    min-height: 90px;
    height : auto;
    background: ${props => props.bgColor || questionColors[Math.floor(Math.random() * questionColors.length)]};
    > h6 {
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.025em;
      text-align: left;
      margin-top: 0px;
      margin-bottom: 10px;
    }

    > h5 {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.025em;
      text-align: right;
      margin-top: 5px;
      margin-bottom: 0;
      padding: 0;
    }

    > p {
      font-weight: 500;
      font-size: 16px;
      text-align: right;
      line-height: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
  
  }

  &.noLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${props => props.bgColor || questionColors[Math.floor(Math.random() * questionColors.length)]};
    min-height: 90px;
    height: auto;
    white-space: pre-line;
      > h4 {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.025em;
      margin-top: 5px;
      margin-bottom: 0;
      padding: 0
  }

  
`;

export const HistoryBox = styled(NavLink)`
  width: 300px;
  border: 1px solid rgb(208, 218, 232);
  border-radius: 10px;
  margin: 10px;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 67px;
  background: rgba(205, 0, 135, 1);
  > h6 {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.025em;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  > h5 {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.025em;
    text-align: right;
    margin-top: 5px;
    margin-bottom: 0;
    padding: 0;
  }
`;

export const TextDiv = styled.div`
  width: 330px;
  display: flex;
  align-items: flex-start;
  gap: 0px;
  flex-direction: column;
  padding : 15px;
  > h6 {
    font-weight: 600;
    font-size: 35px;
    text-align: left;
    margin-top: 100px;
    margin-bottom: 0;
    color : #000000;
    line-height: 42px;
  }

  > p {
    font-weight: 400;
    font-size: 20px;
    margin-top: 0;
    color: rgba(111, 112, 117, 1);
  }
`;

export const StoryContainer = styled.div`
  width: 310px;
  height: 380px;
  border-radius: 10px;
  opacity: 0px;
  background: rgba(127, 127, 127, 0.9);
  display : flex;
  flex-direction : column;
  padding : 10px;
  align-items : center;
  justify-content: center;
  margin: 10px;
  box-shadow: 0px 4px 4px 0px #00000040 inset;

  >h3 {
    text-align: left;
    padding : 0;
    margin : 10px 0;
    color : rgb(255,255,255);
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
    letter-spacing: -0.025em;
    width : 93%
  }
`

export const ProfileBox = styled(NavLink)`
  width: 330px;
  height: 60px;
  margin: 7px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  align-items: center;
  display: flex;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const ProfileText = styled.div`
  margin-right : 5px;
  color: rgb(255, 255, 255);
  text-align: left;
  display: flex;
  flex-direction: column;

  > h6 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 10px;
  }

  > p {
    margin-top: 0;
    font-weight: 400;
    font-size: 10px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh; /* min-height를 100vh로 설정하여 화면 높이만큼 차지하도록 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  margin : 0;
  padding-bottom: 50px;
  background-image : url(${BG});
`;

export const DiaryButton = styled(NavLink)`
  width: 138px;
  height: 80px;
  padding: 10px;
  margin: 7px;
  white-space: normal; /* 텍스트 자동 줄바꿈 */
  display: inline-block;
  border-radius: 10px;
  text-align: left;
  color: rgb(0, 0, 0);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #D0DAE8;
  position : relative;
  line-height: 1.3;

  &.free {
    background: rgb(178, 134, 255);
  }

  &.daily {
    background: rgb(220, 243, 51);
  }

  > p {
    position: absolute;
    bottom : 10px;
    left : 10px;
    font-size: 14px;
    margin: 0;
    color: black;
    font-weight: 400;
    > span {
      font-weight: 500;
    }
  }
`;

export const Circle = styled.div`
  background: rgb(217, 217, 217);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 6px;
  padding: 0;
  background-size : cover;
  background-position : center;
  background-repeat : no-repeat;
  > img {
    height: 100%;
    width : 100%;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }
`;

export const FreeButton = styled.button`
  background-image: url('src/assets/Home/FreeTheme.svg');
  width: 158px;
  height: 97px;
`;

export const MoreButton = styled(NavLink)`
  width: 92%;
  height: 25px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #BBD7FF;
  background: #D0DAE8;
  color: #555555;
  margin-top: 5px;
  box-shadow: 0px 4px 4px 0px #00000026;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center; 
  text-decoration: none;
  
  > h6 {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }

  &:hover {
    background-color: #c0c8d8;
    color: #333333;
  }
`;

export const Title = styled.h6 `
  font-size: 24px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: -0.025em;
  text-align: left;
  color: #555555;
  transform: translateX(-20%);
  padding-left : 0;
  margin-left : 0;
  padding-bottom : 0px;
  margin-bottom : 0px;
  margin-top : 100px;
`;

export const SubTitle = styled.text`
  margin-top : 10px;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: -0.025em;
  text-align: left;
  color: #555555;
  transform: translateX(-20%);
  padding-bottom : 15px;
`;

export const StoryBoxContainer = styled.div`
  width: 86%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
`
