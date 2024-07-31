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
  const [userData, setUserData] = useState({
    memberId: 0,
    username: '',
    ageGroup: '',
    profileImage: '',
    memberKeyword: []
});
  const date = new Date();
  const navigate = useNavigate();
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const count = '4';
  const theme = '자유주제';

  useEffect(() => {
    const fetchUserInfo = async () => {
        try {
            const token = sessionStorage.getItem('token'); // 토큰을 세션 스토리지에서 가져옴
            if (token) {
                const response = await getUserData(token);
                setUserData(response.result);
                setMemberId(response.result.memberId);
            } else {
                console.error('No token found in sessionStorage.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
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
    console.log('Posting data:', {
      title: title,
      content: content,
      memberId: memberId, 
      moodId: moodId, 
      questionId: 0, // 0 : 자유주제
      public: activeButton === 'public',
    });
  
    try {
      const response = await axios.post('/diary/diaries', {
        title: title,
        content: content,
        memberId: memberId, 
        moodId: moodId, 
        questionId: 0,
        public: activeButton === 'public',
      });
      
      console.log('Response:', response.data);
      navigate('/?modal=MyDiary');
    } catch (error) {
      if (error.response) {
        // 서버에서 응답이 있으나 상태 코드가 오류인 경우
        console.error('서버 응답 오류:', error.response.data);
        console.error('상태 코드:', error.response.status);
      } else if (error.request) {
        // 요청은 성공적으로 전달되었으나 응답이 없는 경우
        console.error('요청 오류:', error.request);
      } else {
        // 오류를 발생시킨 요청 설정
        console.error('설정 오류:', error.message);
      }
    }
  };
  return (
    <S.Container>
      <Back to="/" />
      <W.IntroText className="date">{formattedDate}<br/>{userData.username} 님의 {count}번째 쓰임</W.IntroText>
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
