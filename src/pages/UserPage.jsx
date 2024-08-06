import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getSpicyComments, generateSpicyComment } from "../api/diaryAPI";
import Back from "../components/Back";
import * as S from "../styles/page/UserPage.style";
import * as M from "../styles/components/Modal";
import CalendarView from "../components/CalendarView";
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';
import axios from 'axios';
import BG_Answer from "../assets/myPage/bg_answer.svg";
import BG_Spicy_Answer from "../assets/myPage/bg_spicyAnswer.svg";

export default function UserPage() {
    const [modalSwitch, setModalSwitch] = useState(false);
    const [clickedData, setClickedData] = useState(null);
    const [diary, setDiary] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [isSpicy, setIsSpicy] = useState(false);
    const [spicyComment, setSpicyComment] = useState('');
    const [selectedDiaryId, setSelectedDiaryId] = useState(null);
    const daysOfWeekNames = ["일", "월", "화", "수", "목", "금", "토"];
    const emogi = { "화나요": ang, "슬퍼요": sad, "그저그래요": soso, "행복해요": happy, "기뻐요": happy, "뿌듯해요": good, "속상해요": upset };
    const navigate = useNavigate();
    
    // 로그인 여부 확인
    const login = JSON.parse(sessionStorage.getItem('login'));
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        if (!login) {
            alert("로그인이 필요합니다.");
            navigate('/login', { replace: true, state: { redirectedFrom: window.location.pathname } });
        } else {
            const fetchDiaryData = async () => {
                try {
                    const response = await axios.get(`https://sub.skuhackathon.shop/diary/month/${year}/${month}`, {
                        headers: {
                            'Accept': '*/*',
                            'Authorization': `Bearer ${token}`  // JWT 토큰 설정
                        }
                    });
                    setDiary(response.data.result.emojiDTOList);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchDiaryData();
        }
    }, [login, year, month, token, navigate]);

    const tryGetDiary = async (diaryId) => {
        if (!diaryId) return;
        try {
            const response = await axios.get(`https://sub.skuhackathon.shop/diary/${diaryId}`, {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`  // JWT 토큰 설정
                }
            });
            setClickedData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onClickDay = async (data) => {
        if (data) {
            await tryGetDiary(data.diaryId);
            setModalSwitch(true);
            setSelectedDiaryId(data.diaryId);  // diaryId 상태 업데이트
        } else {
            setClickedData(null);
            setModalSwitch(false);
            setSelectedDiaryId(null);  // 선택된 diaryId 초기화
        }
    };

    const onChangeMonth = (date) => {
        setYear(date.getFullYear());
        setMonth(date.getMonth() + 1);
    };

    const handleSpicyClick = async (diaryId) => {
        if (!diaryId) return;  // diaryId가 없으면 함수 종료
        
        if (isSpicy) {
            setIsSpicy(false);
        } else {
            try {
                await generateSpicyComment(diaryId, token); // 매운맛 코멘트 생성
                const spicyData = await getSpicyComments(diaryId, token); // 생성된 매운맛 코멘트 가져오기
                setSpicyComment(spicyData[0]);
                setIsSpicy(true);
            } catch (error) {
                console.error('Error fetching spicy comments:', error);
            }
        }
    };

    return (
        <>
            <S.UserPageContainer>
                <Back to="/main" />
                <M.ModalContainer show={modalSwitch ? "true" : undefined}>
                    <M.ModalContent>
                        <M.ModalImage src={clickedData && clickedData.moodImage} />
                        <M.CloseButton onClick={() => {setModalSwitch(false); setIsSpicy(false);}} />
                        <span>
                            <M.ModalDateBold>{clickedData && new Date(clickedData.createdAt).getFullYear()}</M.ModalDateBold>
                            <M.ModalDate>년</M.ModalDate>
                            <M.ModalDateBold>{clickedData && new Date(clickedData.createdAt).getMonth() + 1}</M.ModalDateBold>
                            <M.ModalDate>월</M.ModalDate>
                            <M.ModalDateBold>{clickedData && new Date(clickedData.createdAt).getDate()}</M.ModalDateBold>
                            <M.ModalDate>일 {clickedData && daysOfWeekNames[new Date(clickedData.createdAt).getDay()]}요일의</M.ModalDate>
                            <M.ModalDateBold>쓰임</M.ModalDateBold>
                        </span>

                        <M.ModalTitle>{clickedData && clickedData.title}</M.ModalTitle>
                        <M.ModalBodyContain>
                            <M.ModalBody>{clickedData && clickedData.content}</M.ModalBody>
                        </M.ModalBodyContain>
                        <M.ModalExtra style={{ backgroundImage: `url(${isSpicy ? BG_Spicy_Answer : BG_Answer})` }}>
                            <h3>AI 쓰담 선생님의 한 마디</h3>
                            <p>{isSpicy ? spicyComment : clickedData && clickedData.aiComments || (
                                <>
                                    AI쓰담 선생님이<br />
                                    일기에 대한 답변을 쓰고 있어요 :)
                                </>
                            )}</p>
                        </M.ModalExtra>
                        {isSpicy ? (
                            <M.OriginButton onClick={() => handleSpicyClick(selectedDiaryId)}>
                                원래 답변으로 돌아가기
                            </M.OriginButton>
                        ) : (
                            <M.SpicyButton onClick={() => handleSpicyClick(selectedDiaryId)}>
                                Event! 🔥 쓰담선생님의 매운맛 조언 들으러 가기 🔥
                            </M.SpicyButton>
                        )}
                    </M.ModalContent>
                </M.ModalContainer>
                <S.IntroContainer>
                    <h1>이번 달 나의 쓰임</h1>
                    <p>과거의 나는 어떤 기록을 남겼을까요?</p>
                    <p>지난 나의 자취를 보며 스스로를 쓰담어주세요</p>
                </S.IntroContainer>
                <CalendarView date={diary} onClick={onClickDay} onChange={onChangeMonth} />
            </S.UserPageContainer>
        </>
    );
}
