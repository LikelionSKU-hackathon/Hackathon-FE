import React, { useState, useEffect } from 'react';
import * as S from "../styles/page/Main.style"
import * as M from "../styles/components/Modal";
import StoryBox from "../components/StoryBox";
import { NavLink, useLocation } from "react-router-dom";
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

const emogi = [ang, sad, soso, happy, good, upset];

function HomePage() {
    const [modalSwitch, setModalSwitch] = useState(false);
    
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        if (query.get('modal') === 'true') {
            setModalSwitch(true);
        } else {
            setModalSwitch(false);
        }
    }, [location.search]);

    const getFormattedDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        const dayOfWeek = daysOfWeek[date.getDay()];
    
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
    
    let diaryNum = 14;
    let topic = '현재 나의 애인과 가치관 차이로 생긴 문제는?';
    let nickName = '훈이 말고 훈기';
    let age = '20대';
    let hashtag = ["감정고민", "직장생활", "인간관계"];
    let tag = '연애 및 대인관계';
    
    return (
        <S.Container>
            <M.ModalContainer show={modalSwitch}>
                <M.ModalHeader>
                    <h6>오늘의 기록<br />저장 완료!</h6>
                    <p>
                        오늘 하루도 수고 많았어요 :) <br />
                        쓰담AI와 다른 유저들의 이야기를 통해 일기를 마무리 해보세요
                    </p>
                </M.ModalHeader>
                <M.ModalContent>
                    <M.ModalImage src={emogi[0]}></M.ModalImage>
                    <M.CloseButton onClick={() => setModalSwitch(false)} />
                    <span>
                        {getFormattedDate()}
                    </span>

                    <M.ModalTitle>제목</M.ModalTitle>
                    <M.ModalBodyContain>
                        <M.ModalBody>내용aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</M.ModalBody>
                    </M.ModalBodyContain>
                    <M.ModalExtra>
                        <h3>AI 쓰감 선생님의 한 마디</h3>
                        <p>고생했어요ㄴㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</p>
                    </M.ModalExtra>
                </M.ModalContent>
                <M.MoreButton to="/diary">더 많은 이야기 보러가기</M.MoreButton>
            </M.ModalContainer> 
            <S.TextDiv>
                <h6>쓰담쓰담<br/>하루의 끝<br/>나의 마음일기</h6>
                <p>오로지 나만을 위한 일기를 써보세요</p>
            </S.TextDiv>

            <S.ProfileBox>
                <S.Circle></S.Circle>
                <S.ProfileText>
                    <h6>{nickName}</h6>
                    <p>{age} / #{hashtag[0]} #{hashtag[1]} #{hashtag[2]} </p>
                </S.ProfileText>
            </S.ProfileBox>

            <S.QBox className="question">
                <h6>TODAY<br/>QUESTION</h6>
                <h5>#{tag}</h5>
                <p>Q. {topic}</p>
            </S.QBox>
            <S.ChangeButton>주제 변경하기</S.ChangeButton>

            <div style={{gap : '14px'}}> 
                <S.DiaryButton className="free" to="/WriteDiary">
                    <p>MY STROY<br/>자유주제로<br/>일기쓰기</p>
                </S.DiaryButton>
                <S.DiaryButton className="daily" to="/WriteDiary">
                    <p>MY STROY<br/>지정주제로<br/>일기쓰기</p>
                </S.DiaryButton>  
            </div>
            
            <S.QBox className="history"  to="/user">
                <h6>MY<br/>HISTORY</h6>
                <h5>나의 일기 기록 모아보기</h5>
            </S.QBox>
            <S.StoryContainer>
                <h3>
                    쓰담쓰담<br/>
                    오늘의 스토리텔러는?
                </h3>
                <StoryBox>
                </StoryBox>
                <StoryBox></StoryBox>
                <S.MoreButton to="/diary">
                    <h6>더 많은 일기 보기 &gt;</h6>
                </S.MoreButton>
            </S.StoryContainer>
        </S.Container>
    );
}

export default HomePage;
