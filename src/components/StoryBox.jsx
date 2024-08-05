import React, { useState, useEffect } from "react";
import * as S from "../styles/components/StoryBox";
import { getLikeStatus} from '../api/diaryAPI';
import axios from "../api/axios";

export default function StoryBox({ diary, onClick }) {
    const [liked, setLiked] = useState(false);
    const [likeId, setLikeId] = useState(null);

    const token = sessionStorage.getItem('token');
    const userId = JSON.parse(sessionStorage.getItem('user') || '{}')?.userId;

    // 좋아요 상태를 가져오는 함수
    const fetchLikeStatus = async () => {
        try {
            if (!token || !userId) throw new Error('토큰이나 사용자 ID가 없습니다.');

            const response = await getLikeStatus(diary.diaryId, token);
            const userLike = response.iliked;

            if (userLike) {
                setLiked(true);
                setLikeId(response.id);
            } else {
                setLiked(false);
                setLikeId(null);
            }
        } catch (error) {
            console.error('좋아요 상태를 가져오는 데 실패했습니다:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchLikeStatus();
    }, [diary.diaryId, userId, token]);

    const handleLike = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        try {
            if (liked) {
                // 좋아요 취소
                await axios.delete(`/diary/${diary.diaryId}/likes/${likeId}`, config);
                setLiked(false);
                setLikeId(null);
            } else {
                // 좋아요 추가
                const response = await axios.post(`/diary/${diary.diaryId}/likes`, {
                    diaryId: diary.diaryId,
                    memberId: userId
                }, config);
                setLiked(true);
                setLikeId(response.data.id);
            }
        } catch (error) {
            console.error(liked ? '좋아요 취소 실패:' : '좋아요 실패:', error.response?.data || error.message);
        }
    };

    return (
        <S.StoryBox onClick={onClick}>

            <S.TitleDiv>
                <h5>#{diary.category}</h5>
                <h5 className="title">{diary.title}</h5>
            </S.TitleDiv>

            <p>{diary.content}</p>
            <S.StoryDiv>
                <S.ProfileBox>
                    <img src={diary.member.profileImage} />
                    <S.TextDiv>
                        <h6>{diary.member.username}</h6>
                        <p>{diary.member.ageGroup} / {diary.member.keywordList.map(keyword => `# ${keyword.category}`).join(' ')}</p>
                    </S.TextDiv>
                </S.ProfileBox>
                <S.CircleButton><img src={diary.moodImage} alt="Mood" /></S.CircleButton>
                <S.CircleButton className='liked' onClick={handleLike}>
                    {liked ? <S.SHeartFilled /> : <S.SHeartOutLined />}
                </S.CircleButton>
            </S.StoryDiv>
        </S.StoryBox>
    );
}
