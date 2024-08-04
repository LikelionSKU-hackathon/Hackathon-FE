import React, { useState, useEffect } from 'react';
import * as M from "../styles/components/Modal";
import { getWriteDiary } from '../api/diaryAPI';
import { useNavigate } from 'react-router-dom';

export default function MyDiaryModal({ setModalSwitch, diaryId }) {
    const [diaryData, setDiaryData] = useState(null);
    const [token, setToken] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 추가

    useEffect(() => {
        // 토큰을 로컬 스토리지에서 가져오기
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
    console.log('diaryId: ',diaryId);

    const getFormattedDate = () => {
        if (!diaryData || !diaryData.createdAt) return null;

        const dateObj = new Date(diaryData.createdAt); // 날짜 포맷 수정
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
        setModalSwitch(false); // 모달 상태 업데이트
        navigate('/'); // URL에서 쿼리 파라미터 제거
    };

    if (!diaryData) {
        return <div>Loading...</div>;
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
                <M.CloseButton onClick={handleClose} />
                <span>
                    {getFormattedDate()}
                </span>

                <M.ModalTitle>{diaryData.title}</M.ModalTitle>
                <M.ModalBodyContain>
                    <M.ModalBody>{diaryData.content}</M.ModalBody>
                </M.ModalBodyContain>
                <M.ModalExtra>
                    <h3>AI 쓰담 선생님의 한 마디</h3>
                    <p>{diaryData.aiComments || (
                        <>
                        AI쓰담 선생님이<br />
                        일기에 대한 답변을 쓰고 있어요 :)
                        </>
                    )}</p>
                </M.ModalExtra>
            </M.ModalContent>
            <M.MoreButton to="/diary">더 많은 이야기 보러가기</M.MoreButton>
        </>
    );
}
