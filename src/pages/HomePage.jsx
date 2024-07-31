import React, { useState, useEffect } from 'react';
import * as S from "../styles/page/Main.style";
import * as M from "../styles/components/Modal";
import StoryBox from "../components/StoryBox";
import { useLocation } from "react-router-dom";
import OtherDiaryModal from '../components/OtherDiaryModal';
import MyDiaryModal from '../components/MyDiaryModal';
import { getUserData, getAIQuestionData } from '../api/userAPI';
import { useRecoilState } from "recoil";
import { isLoginSelector } from "../Recoil/TokenAtom";

function HomePage() {
    const [userData, setUserData] = useState({
        username: '',
        ageGroup: '',
        profileImage: '',
        memberKeyword: []
    });
    const [questionData, setQuestionData] = useState({
        memberId: 0,
        category: '',
        content: ''
    });
    const [modalSwitch, setModalSwitch] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);
    const location = useLocation();
    const [login] = useRecoilState(isLoginSelector);

    useEffect(() => {
        // Modal 상태 설정
        const query = new URLSearchParams(location.search);
        const modalType = query.get('modal');
        if (modalType === 'MyDiary') {
            setModalSwitch(true);
            setCurrentModal('MyDiary');
        } else if (modalType === 'OtherDiary') {
            setModalSwitch(true);
            setCurrentModal('OtherDiary');
        } else {
            setModalSwitch(false);
            setCurrentModal(null);
        }
    }, [location.search]);

    useEffect(() => {
        if (login) {
            const fetchUserData = async () => {
                try {
                    const token = localStorage.getItem('token'); // 토큰을 로컬 스토리지에서 가져옴
                    const userData = await getUserData(token);
                    setUserData(userData);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            const fetchAIQuestionData = async () => {
                try {
                    const token = localStorage.getItem('token'); // 토큰을 로컬 스토리지에서 가져옴
                    const questionData = await getAIQuestionData(token);
                    setQuestionData(questionData);
                } catch (error) {
                    console.error('Error fetching AI question data:', error);
                }
            };

            fetchUserData();
            fetchAIQuestionData();
        }
    }, [login]);

    const handleStoryBoxClick = () => {
        setModalSwitch(true);
        setCurrentModal('OtherDiary');
    };

    return (
        <S.Container>
            <M.ModalContainer show={modalSwitch}>
                {currentModal === 'MyDiary' ? <MyDiaryModal setModalSwitch={setModalSwitch} /> : currentModal === 'OtherDiary' ? <OtherDiaryModal setModalSwitch={setModalSwitch} /> : null}
            </M.ModalContainer>
            <S.TextDiv>
                <h6>쓰담쓰담<br />하루의 끝<br />나의 마음일기</h6>
                <p>오로지 나만을 위한 일기를 써보세요</p>
            </S.TextDiv>

            <S.ProfileBox>
                <S.Circle>
                    {userData.profileImage && <img src={userData.profileImage} alt="Profile" />}
                </S.Circle>
                <S.ProfileText>
                    <h6>{userData.username || '기본 이름'}</h6>
                    <p>{userData.ageGroup || '기본 나이'} / #{userData.memberKeyword.length > 0 ? userData.memberKeyword.join(' #') : '기본 키워드'}</p>
                </S.ProfileText>
            </S.ProfileBox>

            <S.QBox className="question">
                <h6>TODAY<br />QUESTION</h6>
                <h5>#{questionData.category || 'category'}</h5>
                <p>Q. {questionData.content || 'content'}</p>
            </S.QBox>
            <S.ChangeButton>주제 변경하기</S.ChangeButton>

            <div style={{ gap: '14px' }}>
                <S.DiaryButton className="free" to="/WriteFreeDiary">
                    <p>MY STORY<br />자유주제로<br />일기쓰기</p>
                </S.DiaryButton>
                <S.DiaryButton className="daily" to="/WriteDiary">
                    <p>MY STORY<br />지정주제로<br />일기쓰기</p>
                </S.DiaryButton>
            </div>

            <S.QBox className="history" to="/user">
                <h6>MY<br />HISTORY</h6>
                <h5>나의 일기 기록 모아보기</h5>
            </S.QBox>
            <S.StoryContainer>
                <h3>
                    쓰담쓰담<br />
                    오늘의 스토리텔러는?
                </h3>
                <StoryBox onClick={handleStoryBoxClick}></StoryBox>
                <StoryBox onClick={handleStoryBoxClick}></StoryBox>
                <S.MoreButton to="/diary">
                    <h6>더 많은 일기 보기 &gt;</h6>
                </S.MoreButton>
            </S.StoryContainer>
            
        </S.Container>
    );
}

export default HomePage;
