import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';
import { getUserData } from '../api/userAPI'; 
import * as W from "../styles/page/Write.style";
import * as S from "../styles/page/Main.style";
import Emotion from "../components/Emotion";
import Back from "../components/Back";

export default function WriteDiary() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [activeButton, setActiveButton] = useState('public');
  const [moodId, setMoodId] = useState(null); // moodId 상태 추가
  const [memberId, setMemberId] = useState(null); // 사용자 ID 상태
  const date = new Date();
  const navigate = useNavigate();
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const nickname = '쓰담';
  const count = '4';
  const theme = '주제쓰는 칸';

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userInfo = await getUserData(token);
          setMemberId(userInfo.id); // 사용자 ID를 상태로 설정
        }
      } catch (error) {
        console.error('Error fetching user info', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleEmotionSelect = (moodId) => {
    setMoodId(moodId); // 선택된 moodId를 상태로 설정
  };

  const handleDoneClick = async () => {
    if (memberId === null) {
      console.error('Member ID is not available');
      return;
    }

    try {
      await axios.post('/diary/diaries', {
        title: title,
        content: content,
        memberId: memberId, 
        moodId: moodId, 
        questionId: 0, // 0 : 자유주제
        public: activeButton === 'public',
      });
      navigate('/?modal=MyDiary');
    } catch (error) {
      console.error('Error posting diary entry', error);
    }
  };

  return (
    <S.Container>
      <Back to="/" />
      <W.IntroText className="date">{formattedDate}<br/>{nickname} 님의 {count}번째 쓰임</W.IntroText>
      <W.IntroText className="theme">{theme}</W.IntroText>
      <Emotion onSelect={handleEmotionSelect} />
      <W.WriteBox
        className="title"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <W.WriteBox
        style={{ height: '180px' }}
        placeholder="내용 입력하기"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <W.PublicDiv>
        <W.PublicButton
          active={activeButton === 'public'}
          onClick={() => handleButtonClick('public')}
        >
          공개
        </W.PublicButton>
        <W.PublicButton
          active={activeButton === 'private'}
          onClick={() => handleButtonClick('private')}
        >
          비공개
        </W.PublicButton>
      </W.PublicDiv>
      <W.Done onClick={handleDoneClick}>입력완료</W.Done>
    </S.Container>
  );
}