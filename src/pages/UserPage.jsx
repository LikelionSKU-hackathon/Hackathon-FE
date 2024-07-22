import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { useNavigate, useLocation } from "react-router-dom";
import Back from "../components/Back"
import * as S from "../styles/page/UserPage.style";
import * as M from "../styles/components/Modal";
import icon from "../assets/Login/icon_edit.png";
import CalendarView from "../components/CalendarView";
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

const emogi = [ang, sad, soso, happy, good, upset];
export default function UserPage() {
    const [modalSwitch, setModalSwitch] = useState(true);
    const isLogin = useRecoilState(isLoginSelector);
    const today = new Date();
    const [date, setDate] = useState(today);
    const [clickedData, setClickedData] = useState(null);
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    const currentLocation = useLocation();
    useEffect(() => {
        // login 확인
        //console.log(`isLogin: ${isLogin}`);
        if (!isLogin) {
            <Navigate
                to={'/login'}
                replace
                state={{ redirectedFrom: currentLocation }}
            />
        }
    }, []);
    const datesWithImages = [
        { date: new Date(2024, 6, 1), image: 0, keyword: "제목 1", content: "내용" },
        { date: new Date(2024, 6, 2), image: 1, keyword: "제목 1", content: "내용이에요.요요요요요요요요요요용" },
        { date: new Date(2024, 6, 5), image: 4, keyword: "제목 1", content: "내용이에요.요요요요요요요요요요용" },
        // ... more dates
    ];
    const onClickDay = (data) => {
        console.log(data);
        if (data) {
            setClickedData(data);
            setModalSwitch(true);
        } else {
            setClickedData(null);
            setModalSwitch(false);
        }
    };

    return (
        <S.UserPageContainer>
            <Back></Back>
            <M.ModalContainer show={modalSwitch}>
                <M.ModalContent>
                    <M.ModalImage src={emogi[0]}></M.ModalImage>
                    <M.CloseButton onClick={() => setModalSwitch(false)} />
                    <span>
                        <M.ModalDateBold>{clickedData}</M.ModalDateBold>
                        <M.ModalDate>년</M.ModalDate>
                        <M.ModalDateBold>7</M.ModalDateBold>
                        <M.ModalDate>월</M.ModalDate>
                        <M.ModalDateBold>날짜</M.ModalDateBold>
                        <M.ModalDate>일 x요일의</M.ModalDate>
                        <M.ModalDateBold>쓰임</M.ModalDateBold>
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
            </M.ModalContainer>
            <S.IntroContainer>
                <h1>이번 달 나의 쓰임</h1>
                <p>과거의 나는 어떤 기록을 남겼을까요?</p>
                <p>지난 나의 자취를 보며 스스로를 쓰담어주세요</p>
            </S.IntroContainer>
            <CalendarView date={datesWithImages} onClick = {onClickDay}/>
        </S.UserPageContainer>
    );
}