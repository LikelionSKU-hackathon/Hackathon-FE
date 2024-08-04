import React, { useEffect, useState } from "react";
import * as M from "../styles/components/Modal";
import { useNavigate } from "react-router-dom";
import { getWriteDiary, getDiaryComments, sendComment } from '../api/diaryAPI';

export default function OtherDiaryModal({ setModalSwitch, diaryId }) {
    const [diaryData, setDiaryData] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = sessionStorage.getItem('token');
        const getUser = sessionStorage.getItem('user');
        if (getToken) {
            setToken(getToken);
        }
        if (getUser) {
            try {
                const parsedUser = JSON.parse(getUser);
                setUserId(parsedUser.userId);
            } catch (e) {
                console.error('User information parsing error:', e);
            }
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

    useEffect(() => {
        const fetchComments = async () => {
            try {
                if (token) {
                    const data = await getDiaryComments(diaryId, token);
                    setComments(data);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [diaryId, token]);

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return;

        try {
            await sendComment(diaryId, newComment, userId, token);
            const data = await getDiaryComments(diaryId, token);
            setComments(data);
            setNewComment('');
        } catch (error) {
            console.error('Error sending comment:', error);
        }
    };

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
        setModalSwitch(false);
        navigate('/diary');
    };

    return (
        <M.ModalContent>
            {diaryData && (
                <>
                    <M.ModalImage src={diaryData.moodImage} alt="Mood" />
                    <M.CloseButton onClick={handleClose} />
                    <span>
                        {getFormattedDate()}
                    </span>

                    <M.ModalTitle>#{diaryData.category} {diaryData.title}</M.ModalTitle>
                    <M.ModalBodyContain>
                        <M.ModalBody>{diaryData.content}</M.ModalBody>
                    </M.ModalBodyContain>
                    <M.CommentContain>
                        <M.ModalLike>
                            <div><M.SHeartFilled /><h6>{diaryData.likeCount || 0}</h6></div>
                        </M.ModalLike>
                        <M.Line />
                        <h3>이 이야기에 달린 코멘트들</h3>
                        <M.CommentDiv>
                            {comments.map((comment, index) => (
                                <M.Comment key={index}>
                                    <h5>{comment.memberUsername}</h5>
                                    <p>{comment.content}</p>
                                </M.Comment>
                            ))}
                        </M.CommentDiv>
                        <M.InputContainer>
                            <M.CommetInput
                                value={newComment}
                                onChange={handleCommentChange}
                                placeholder="나도 한 마디 남기러 가기"
                            />
                            <M.ArrowButton onClick={handleCommentSubmit} />
                        </M.InputContainer>
                    </M.CommentContain>
                </>
            )}
        </M.ModalContent>
    );
}
