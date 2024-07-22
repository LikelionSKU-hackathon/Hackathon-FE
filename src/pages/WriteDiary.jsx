import React, { useState } from "react";
import * as W from "../styles/page/Write.style"
import * as S from "../styles/page/Main.style"
import Emotion from "../components/Emotion";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

const WriteBox = styled.textarea`
  width: 280px;
  height: 20px;
  background: rgb(208,218,232);
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 13px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
  overflow-y: auto;
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border: 2px rgb(85, 85, 85) dotted;
  border-radius: 100%;
  background: rgb(242,242,241);
  margin: 5px;
`;

const Button = styled.button`
  width : 95%;
  height : 40px;
  margin : 10px;
  background : rgb(208, 218, 232);
  border : 1px rgb(255,255,255);
  border-radius : 10px;
  text-size : 14px;
  text-weight : 500;
  text-color : rgb(85,85,85);
`;

const PublicButton = styled(Button)`
  width : 140px;
  background: ${(props) => (props.active ? 'rgb(147, 186, 243)' : 'rgb(208, 218, 232)')};
  border: 1px solid ${(props) => (props.active ? 'rgb(79, 132, 210)' : 'rgb(255, 255, 255)')};
  cursor: pointer;
`;

export default function WriteDiary() {
  const [activeButton, setActiveButton] = useState(null);
  const [emotion, setEmotion] = useState('오늘의 감정');
  const date = new Date();
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  let nickname = '쓰담';
  let count = '4';
  let theme = '주제쓰는 칸';

  const handleButtonClick = (button) => {
    setActiveButton(button);
    console.log(button === 'public' ? 0 : 1); // 0 for public, 1 for private
  };

  const handleEmotionSelect = (selectedEmotion) => {
    setEmotion(selectedEmotion);
};

  return (
    <S.Container>
      <W.IntroText className = "date">{formattedDate}<br/>{nickname} 님의 {count}번째 쓰임</W.IntroText>
      <W.IntroText className="theme">{theme}</W.IntroText>
      <Emotion onSelect={handleEmotionSelect}/>
      <W.IntroText className="emotion">{emotion}</W.IntroText>
      <W.WriteBox className="title" placeholder="제목을 입력해주세요"></W.WriteBox>
      <W.WriteBox style={{ height: '180px' }} placeholder="내용 입력하기"></W.WriteBox>
      <W.PublicDiv>
        <W.PublicButton active={activeButton === 'public'} onClick={() => handleButtonClick('public')}>
          공개
        </W.PublicButton>
        <W.PublicButton active={activeButton === 'private'} onClick={() => handleButtonClick('private')}>
          비공개
        </W.PublicButton>
      </W.PublicDiv>
      <W.Done>입력완료</W.Done> 
      {/* onClick 하면 완료 페이지로 넘어가기 */}
    </S.Container>
  );
}
