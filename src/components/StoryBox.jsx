import * as S from "../styles/components/StoryBox"
import React, { useState } from "react"
import profile from "../assets/Login/profile.png"
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

const emogi = [ang, sad, soso, happy, good, upset];

export default function StoryBox({ onClick }) {
    let tag = '연애 및 대인관계'
    let title = '현재 나의 애인과 가치관의 차이로 생긴 문제는?'
    let tt = '오늘 여자친구랑 이야기 하다가 대판 싸웠다.. 우린 정말 잘 맞는데, 딱 하나 안맞는 포인트가 있다. 바로 남사친 여사친 문제! 아니..! 남여사이에 친구가 어디있어? 진짜 이해를 하려해도 이해를 할 수가 없다.. 진짜 어떻게 해결을 해야 할 지도 모르겠다';
    let nickName = '훈이 말고 훈기'
    let age = '20대'
    let tags = ['감정고민', '직장생활', '인간관계'];

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [modalSwitch, setModalSwitch] = useState(false);
  
    const handleLike = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setLiked(prelike => !liked);
        setLikeCount(preCount => (liked ? preCount-1 : preCount + 1));
    };

    return(
        <S.StoryBox onClick={onClick}>
            <h5>#{tag}</h5><h5 className="title">{title}</h5>
            <p>
                {tt}
            </p>
            <S.StoryDiv>
                <S.ProfileBox>
                    <img src={profile}></img>
                    <S.TextDiv>
                        <h6>{nickName}</h6>
                        <p>{age} / #{tags[0]} #{tags[1]} #{tags[2]}</p>
                    </S.TextDiv>
                </S.ProfileBox>
                <S.CircleButton><img src={emogi[0]} /></S.CircleButton>
                <S.CircleButton className='liked' onClick={handleLike}>
                    {liked ? <S.SHeartFilled /> : <S.SHeartOutLined />}
                </S.CircleButton>
            </S.StoryDiv>
        </S.StoryBox>
    );
}