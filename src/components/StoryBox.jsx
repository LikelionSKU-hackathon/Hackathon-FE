import React, { useState, useEffect } from "react";
import * as S from "../styles/components/StoryBox";
import axios from "../api/axios";
import { getLikeStatus } from "../api/diaryAPI";

export default function StoryBox({ diary, onClick }) {
    const [liked, setLiked] = useState(false);
    const [likeId, setLikeId] = useState(null);

    const token = sessionStorage.getItem('token');
    
    const getUserId = () => {
        const user = sessionStorage.getItem('user');
        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                return parsedUser.userId;
            } catch (e) {
                console.error('User information parsing error:', e);
                return null;
            }
        }
        return null;
    };
    const userId = getUserId();

    useEffect(() => {
        const fetchLikeStatus = async () => {
            try {
                if (!token || !userId) throw new Error('토큰이나 사용자 ID가 없습니다.');
                const likedStatus = await getLikeStatus(diary.diaryId, token);
                setLiked(likedStatus);
            } catch (error) {
                console.error('좋아요 상태를 가져오는 데 실패했습니다:', error.response?.data || error.message);
            }
        };
        fetchLikeStatus();
    }, [diary.diaryId, token, userId]);

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
            <h5>#{diary.category}</h5>
            <h5 className="title">{diary.title}</h5>
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
