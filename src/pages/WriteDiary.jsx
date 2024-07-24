import React, { useState } from "react";
import * as W from "../styles/page/Write.style"
import * as S from "../styles/page/Main.style"
import Emotion from "../components/Emotion";
import Back from "../components/Back";

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
      <Back to="/"></Back>
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
      <W.Done to="/">입력완료</W.Done> 
      {/* onClick 하면 완료 페이지로 넘어가기 */}
    </S.Container>
  );
}
