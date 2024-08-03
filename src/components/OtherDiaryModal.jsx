import React, { useEffect, useState } from "react";
import * as M from "../styles/components/Modal";
import Send from "./Send";
import { useNavigate } from "react-router-dom";
import { getWriteDiary } from '../api/diaryAPI';

export default function OtherDiaryModal({ setModalSwitch, diaryId }) { // diaryId를 prop으로 받음
    const [diaryData, setDiaryData] = useState(null);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = sessionStorage.getItem('token');
        if (getToken) {
            setToken(getToken);
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
    }, [diaryId, token]);

    console.log('diaryData: ', diaryData);

    const getFormattedDate = () => {
        const dateObj = new Date(diaryData.createdAt);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();

        return (
            <>
              <M.ModalDate>{year}년 {month}월 {day}일</M.ModalDate>
              <M.ModalDateBold>{diaryData.memberUsername}</M.ModalDateBold>
              <M.ModalDate>님의 쓰임</M.ModalDate>
            </>
        );
    };

    const handleClose = () => {
        setModalSwitch(false); // 모달 상태 업데이트
        navigate('/diary'); // URL에서 쿼리 파라미터 제거
    };


    return (
        <M.ModalContent>
            {diaryData && (
                <>
                    <M.ModalImage src={diaryData.moodImage}></M.ModalImage>
                    <M.CloseButton onClick={handleClose} />
                    <span>
                        {getFormattedDate()}
                    </span>

                    <M.ModalTitle>#{diaryData.category} {diaryData.title}</M.ModalTitle>
                    <M.ModalBodyContain>
                        <M.ModalBody>{diaryData.content}</M.ModalBody>
                    </M.ModalBodyContain>
                    <M.CommentContain>
                        <M.ModalLike><div><M.SHeartFilled /><h6>{diaryData.count}</h6></div></M.ModalLike>
                        <M.Line />
                        <h3>이 이야기에 달린 코멘트들</h3>
                        <M.CommentDiv>
                            <M.Comment>
                                <h5>냥냥냥</h5><p>재밌어요</p>
                            </M.Comment>
                            <M.Comment></M.Comment>
                            <M.Comment></M.Comment>
                            <M.Comment></M.Comment>
                        </M.CommentDiv>
                        <Send />
                    </M.CommentContain>
                </>
            )}
        </M.ModalContent>
    );
}
