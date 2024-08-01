import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from '../api/axios';
import { getPreInfo } from '../api/userAPI'; 
import * as W from "../styles/page/Write.style";
import * as S from "../styles/page/Main.style";
import Emotion from "../components/Emotion";
import Back from "../components/Back";

export default function WriteFreePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [activeButton, setActiveButton] = useState('public');
  const [moodId, setMoodId] = useState(null);
  const [preInfo, setPreInfo] = useState({
    date: '',
    username: '',
    diaryCount: 0,
  });
  const [token, setToken] = useState('');
  const location = useLocation();
  const memberId = new URLSearchParams(location.search).get('memberId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPreInfo = async () => {
      const getToken = sessionStorage.getItem('token');
      setToken(getToken);
      if (memberId && getToken) {
        const data = await getPreInfo(memberId, getToken);
        if (data && data.isSuccess) {
          setPreInfo(data.result);
        } else {
          console.error('Error fetching pre-info data:', data.message);
        }
      }
    };
    fetchPreInfo();
  }, [memberId]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleEmotionSelect = (moodId) => {
    setMoodId(moodId);
  };

  const handleDoneClick = async () => {
    console.log('Posting data:', {
      title: title,
      content: content,
      memberId: memberId, 
      moodId: moodId, 
      questionId: 0,
      public: activeButton === 'public'
    });
  
    try {
      const response = await axios.post('/diary/diaries', {
        title: title,
        content: content,
        memberId: memberId, 
        moodId: moodId, 
        questionId: 0,
        public: activeButton === 'public',
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const { id } = response.data;
      console.log('FreeDiary Created diary ID:', id);
      navigate(`/?modal=MyDiary&diaryId=${id}`);
      console.log('자유주제 일기 쓰기 Response:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('서버 응답 오류:', error.response.data);
        console.error('상태 코드:', error.response.status);
      } else if (error.request) {
        console.error('요청 오류:', error.request);
      } else {
        console.error('설정 오류:', error.message);
      }
    }
  };
  
  return (
    <S.Container>
      <Back to="/" />
      <W.IntroText className="date">{preInfo.date}<br/>{preInfo.username} 님의 {preInfo.diaryCount}번째 쓰임</W.IntroText>
      <W.IntroText className="theme">"자유주제"</W.IntroText>
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
