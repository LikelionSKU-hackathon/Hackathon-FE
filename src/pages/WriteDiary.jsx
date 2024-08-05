import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../api/axios';
import { getPreInfo } from '../api/userAPI'; 
import * as W from "../styles/page/Write.style";
import * as S from "../styles/page/Main.style";
import Emotion from "../components/Emotion";
import Back from "../components/Back";

export default function WriteDiary() {
  const [content, setContent] = useState('');
  const [activeButton, setActiveButton] = useState('public');
  const [moodId, setMoodId] = useState(null);
  const [moodLabel, setMoodLabel] = useState('');
  const [preInfo, setPreInfo] = useState({
    date: '',
    username: '',
    diaryCount: 0,
  });

  const [token, setToken] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const memberId = queryParams.get('memberId');
  const category = queryParams.get('category');
  console.log('category : ', category);
  const decodedTitle = decodeURIComponent(title);
  console.log(decodedTitle);

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
  console.log('preInfo: ', preInfo);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleEmotionSelect = (moodId, moodLabel) => {
    setMoodId(moodId);
    setMoodLabel(moodLabel); // 선택된 레이블 상태로 설정
  };

  const handleDoneClick = async () => {
    const postData = {
      category: category,
      title: title,
      content: content,
      memberId: memberId,
      moodId: moodId,
      questionId: 0,
      public: activeButton === 'public',
    };
    
    console.log('AI Posting Data: ', postData);
  
    try {
      const response = await axios.post('/diary/diaries', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      console.log(response.data);
      const { id } = response.data;
      console.log('Created diary ID:', id);
      navigate(`/main?modal=MyDiary&diaryId=${id}`);
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
      <Back to="/main" style={{ marginTop: '10px' }} />
      <W.IntroText className="date">{preInfo.date}<br/>{preInfo.username} 님의 {preInfo.diaryCount}번째 쓰임</W.IntroText>
      <W.IntroText className="theme">"{title}"</W.IntroText>
      <Emotion onSelect={handleEmotionSelect} />
      {moodLabel && <W.EmotionLabel>{moodLabel}</W.EmotionLabel>} {/* 선택된 레이블 표시 */}
      <W.TitleArea> {title} </W.TitleArea>
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
