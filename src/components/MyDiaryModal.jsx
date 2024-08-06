import React, { useState, useEffect } from 'react';
import * as M from "../styles/components/Modal";
import { getWriteDiary, getSpicyComments, generateSpicyComment } from '../api/diaryAPI'; // generateSpicyComment 추가
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import BG_Answer from "../assets/myPage/bg_answer.svg";
import BG_Spicy_Answer from "../assets/myPage/bg_spicyAnswer.svg";

export default function MyDiaryModal({ setModalSwitch, diaryId }) {
    const [diaryData, setDiaryData] = useState(null);
    const [spicyComment, setSpicyComment] = useState(''); // 스파이시 코멘트 상태 추가
    const [isSpicy, setIsSpicy] = useState(false); // 스파이시 버튼 상태 추가
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = sessionStorage.getItem('token');
        if (getToken) {
            setToken(getToken);
        } else {
            console.error('토큰이 저장되어 있지 않습니다.');
        }
    }, []);

    useEffect(() => {
        const fetchDiaryData = async () => {
            try {
                const data = await getWriteDiary(diaryId, token);
                setDiaryData(data);
            } catch (error) {
                console.error('Error fetching diary data:', error);
            }
        };

        fetchDiaryData();
    }, [token, diaryId]);

    const getFormattedDate = () => {
        if (!diaryData || !diaryData.createdAt) return null;

        const dateObj = new Date(diaryData.createdAt);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        const dayOfWeek = daysOfWeek[dateObj.getDay()];

        return (
            <>
                <M.ModalDateBold>{year}</M.ModalDateBold>
                <M.ModalDate>년</M.ModalDate>
                <M.ModalDateBold>{month}</M.ModalDateBold>
                <M.ModalDate>월</M.ModalDate>
                <M.ModalDateBold>{day}</M.ModalDateBold>
                <M.ModalDate>일 {dayOfWeek}요일의</M.ModalDate>
                <M.ModalDateBold>쓰임</M.ModalDateBold>
            </>
        );
    };

    const handleClose = () => {
        setModalSwitch(false);
        navigate('/main');
    };

    const handleSpicyClick = async () => {
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

    if (!diaryData) {
        return <Loading />;
    }

    return (
        <>
            <M.ModalHeader>
                <h6>오늘의 기록<br />저장 완료!</h6>
                <p>
                    오늘 하루도 수고 많았어요 :) <br />
                    쓰담AI와 다른 유저들의 이야기를 통해 일기를 마무리 해보세요
                </p>
            </M.ModalHeader>
            <M.ModalContent>
                <M.ModalImage src={diaryData.moodImage} />
                <M.CloseButton onClick={handleClose} aria-label="Close" />
                <span>
                    {getFormattedDate()}
                </span>

                <M.ModalTitle>{diaryData.title}</M.ModalTitle>
                <M.ModalBodyContain>
                    <M.ModalBody>{diaryData.content}</M.ModalBody>
                </M.ModalBodyContain>
                <M.ModalExtra style={{ backgroundImage: `url(${isSpicy ? BG_Spicy_Answer : BG_Answer})` }}>
                    <h3>AI 쓰담 선생님의 한 마디</h3>
                    <p>{isSpicy ? spicyComment : diaryData.aiComments || (
                        <>
                        AI쓰담 선생님이<br />
                        일기에 대한 답변을 쓰고 있어요 :)
                        </>
                    )}</p>
                </M.ModalExtra>
                {isSpicy ? (
                    <M.OriginButton onClick={handleSpicyClick}>
                        원래 답변으로 돌아가기
                    </M.OriginButton>
                ) : (
                    <M.SpicyButton onClick={handleSpicyClick}>
                        Event! 🔥 쓰담선생님의 매운맛 조언 들으러 가기 🔥
                    </M.SpicyButton>
                )}
            </M.ModalContent>
            <M.MoreButton to="/diary">더 많은 이야기 보러가기</M.MoreButton>
        </>
    );
}
