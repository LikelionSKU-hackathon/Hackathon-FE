import React, { useState, useEffect } from "react";
import * as S from "../styles/components/StoryBox";
import axios from "../api/axios";


export default function StoryBox({ diary, onClick }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
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

    const fetchLikeStatus = async () => {
        try {
            if (!token || !userId) throw new Error('토큰이나 사용자 ID가 없습니다.');

            // 좋아요 상태를 확인하는 POST 요청
            const response = await axios.post(`/diary/${diary.diaryId}/likes`, {
                diaryId: diary.diaryId,
                memberId: userId
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const userLike = response.data;
            if (userLike) {
                setLiked(true);
                setLikeId(userLike.id);
                setLikeCount(prevCount => prevCount + 1); // 예시로 좋아요 수를 증가
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
                setLikeCount(prevCount => prevCount - 1);
                setLiked(false);
                setLikeId(null);
            } else {
                // 좋아요 추가
                const response = await axios.post(`/diary/${diary.diaryId}/likes`, {
                    diaryId: diary.diaryId,
                    memberId: userId
                }, config);
                setLikeCount(prevCount => prevCount + 1);
                setLiked(true);
                setLikeId(response.data.id);
            }
        } catch (error) {
            console.error(liked ? '좋아요 취소 실패:' : '좋아요 실패:', error.response?.data || error.message);
        }
    };

    console.log('diary: ', diary);

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
                <S.CircleButton className='liked'>{/* onClick={handleLike}*/}
                    {liked ? <S.SHeartFilled /> : <S.SHeartOutLined />}
                </S.CircleButton>
            </S.StoryDiv>
        </S.StoryBox>
    );
}
