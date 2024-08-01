import React, { useState } from "react";
import * as S from "../styles/components/StoryBox";
import profile from "../assets/Login/profile.png";
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

const emogi = [ang, sad, soso, happy, good, upset];

export default function StoryBox({ diary, onClick }) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setLiked(prelike => !liked);
        setLikeCount(preCount => (liked ? preCount - 1 : preCount + 1));
    };

    return (
        <S.StoryBox onClick={onClick}>
            {/* <h5>#{}</h5> 다이어리 키워드 줘야함 */}
            <h5 className="title">{diary.title}</h5>
            <p>{diary.content}</p>
            <S.StoryDiv>
                <S.ProfileBox>
                    <img src={diary.member.profileImage || profile} alt="Profile" />
                    <S.TextDiv>
                        <h6>{diary.member.username}</h6>
                        <p>{diary.member.ageGroup} / #{diary.member.keywordList.map(keyword => keyword.category).join(' ')}</p>
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
