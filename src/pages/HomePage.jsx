import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Main.style";
import * as M from "../styles/components/Modal";
import OtherDiaryModal from '../components/OtherDiaryModal';
import MyDiaryModal from '../components/MyDiaryModal';
import { getUserData, getAIQuestionData } from '../api/userAPI';
import { getPopularDiary } from '../api/diaryAPI';
import StoryBox from '../components/StoryBox';
import Loading from '../components/Loading';

function HomePage() {
    const [userData, setUserData] = useState({
        memberId: 0,
        username: '',
        ageGroup: '',
        profileImage: null,
        keywordList: [],
    });
    const [questionData, setQuestionData] = useState({
        memberId: 0,
        category: 'category',
        content: 'content'
    });
    const [popularDiary, setPopularDiary] = useState([]);
    const [modalSwitch, setModalSwitch] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);
    const [diaryId, setDiaryId] = useState(null);
    const [token, setToken] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const modalType = query.get('modal');
        const diaryIdFromQuery = query.get('diaryId');
        setDiaryId(diaryIdFromQuery);
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
        const fetchData = async () => {
            try {
                const getToken = sessionStorage.getItem('token');
                setToken(getToken);

                if (getToken) {
                    const fetchUserData = async () => {
                        const response = await getUserData(getToken);
                        console.log('response: 1', response.result);
                        setUserData(response.result);
                    };

                    const fetchAIQuestionData = async () => {
                        const response = await getAIQuestionData(getToken);
                        setQuestionData({
                            memberId: response.result.memberId,
                            category: response.result.category,
                            content: response.result.title
                        });
                    };

                    // Fetch all necessary data
                    await Promise.all([fetchUserData(), fetchAIQuestionData()]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchPopularDiary = async () => {
            try {
                const response = await getPopularDiary();
                if (response) {
                    setPopularDiary(response.result.diaryList);
                }
            } catch (error) {
                console.error('오늘의 일기 불러오기 error: ', error);
            }
        };

        fetchPopularDiary();
    }, []);

    const handleStoryBoxClick = () => {
        setModalSwitch(true);
        navigate('/diary');
    };

    const handleWriteDiaryClick = () => {
        const encodedTitle = encodeURIComponent(questionData.content);
        navigate(`/WriteDiary?category=${questionData.category}&memberId=${userData.memberId}&title=${encodedTitle}`);
    };

    const handleWriteFreeDiaryClick = () => {
        navigate(`/WriteFreeDiary?memberId=${userData.memberId}`);
    };

    const handleChangeButtonClick = async () => {
        const getToken = sessionStorage.getItem('token');
        if (getToken) {
            const response = await getAIQuestionData(getToken);
            console.log('response: 3', response.result);
            setQuestionData({
                memberId: response.result.memberId,
                category: response.result.category,
                content: response.result.title
            });
        }
    };

    return (
        <>
            <Loading></Loading>
            <S.Container>
                <M.ModalContainer show={modalSwitch ? 'true' : undefined}>
                    {currentModal === 'MyDiary' ? (
                        <MyDiaryModal setModalSwitch={setModalSwitch} diaryId={diaryId} />
                    ) : currentModal === 'OtherDiary' ? (
                        <OtherDiaryModal setModalSwitch={setModalSwitch} />
                    ) : null}
                </M.ModalContainer>
                <S.TextDiv>
                    <h6>쓰담쓰담<br />하루의 끝<br />나의 마음일기</h6>
                    <p>오로지 나만을 위한 일기를 써보세요</p>
                </S.TextDiv>

                <S.ProfileBox to='/login'>
                    <S.Circle>
                        <img src={userData.profileImage} />
                    </S.Circle>
                    <S.ProfileText>
                        <h6>{userData.username || '로그인 해주세요'}</h6>
                        <p>
                            {userData.ageGroup} /
                            {userData.keywordList.length > 0
                                ? userData.keywordList.map(keyword => ` #${keyword.category}`).join(' ')
                                : '키워드'}
                        </p>
                    </S.ProfileText>
                </S.ProfileBox>

                {token ? (
                    <S.QBox className="question">
                        <h6>TODAY<br />QUESTION</h6>
                        <h5># {questionData.category || 'AI 연동 중'}</h5>
                        <p>Q. {questionData.content || 'AI 연동 중'}</p>
                    </S.QBox>
                ) : (
                    <S.QBox className="noLogin">
                        <h4>쓰담쓰담이 당신을 위로 할<br />오늘의 일기 주제를 생성하고 있어요 :)</h4>
                    </S.QBox>
                )}

                <S.ChangeButton onClick={handleChangeButtonClick}>주제 변경하기</S.ChangeButton>

                <div style={{ gap: '14px' }}>
                    <S.DiaryButton className="free" onClick={handleWriteFreeDiaryClick}>
                        <p><span>My Story</span><br /> 자유주제로<br />일기쓰기</p>
                    </S.DiaryButton>
                    <S.DiaryButton className="daily" onClick={handleWriteDiaryClick}>
                        <p><span>My Story</span><br /> 지정주제로<br />일기쓰기</p>
                    </S.DiaryButton>
                </div>

                <S.HistoryBox to="/user">
                    <h6>MY<br />HISTORY</h6>
                    <h5>나의 일기 기록 모아보기</h5>
                </S.HistoryBox>
                <S.StoryContainer>
                    <h3>
                        쓰담쓰담<br />
                        오늘의 스토리텔러는?
                    </h3>
                    {popularDiary.map(diary => (
                        <StoryBox
                            key={diary.diaryId}
                            diary={diary}
                            onClick={() => handleStoryBoxClick(diary.diaryId)}
                        />
                    ))}
                    <S.MoreButton to="/diary">
                        <h6>더 많은 일기 보기 &gt;</h6>
                    </S.MoreButton>
                </S.StoryContainer>
            </S.Container>
        </>
    );
}

export default HomePage;