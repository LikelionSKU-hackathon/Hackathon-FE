import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { Navigate, useLocation ,useNavigate} from "react-router-dom";
import Back from "../components/Back"
import * as S from "../styles/page/UserPage.style";
import * as M from "../styles/components/Modal";
import CalendarView from "../components/CalendarView";
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';
import axios from 'axios';

export default function UserPage() {
    const [modalSwitch, setModalSwitch] = useState(false);
    const [token, setToken] = useRecoilState(tokenState);
    const [clickedData, setClickedData] = useState(null);
    const daysOfWeekNames = ["일", "월", "화", "수", "목", "금", "토"];
    const emogi = {"화나요":ang,"슬퍼요" : sad, "그저그래요":soso, "행복해요":happy, "뿌듯해요":good, "속상해요":upset};
    const navigate = useNavigate();
    // 로그인 여부 확인
    const login =JSON.parse(sessionStorage.getItem('login'));
    useEffect(() => {
        console.log(login);
        // login 확인
        if (!login) {
            alert("로그인이 필요합니다.");
            navigate('/login', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else{
            console.log("로그인 되어있음");
        }
    }, []);
    // month는 0부터 시작
    const datesWitImages = [
        { date: new Date(2024, 6, 1), image: "화나요", title: "제목 1", content: "내용", aiComments: "AAAAAAAAAAAAAAAAAA  AAAAAAAAAAAAAAAAA" },
        { date: new Date(2024, 6, 2), image: "슬퍼요", title: "제목 2", content: "내용이에요.22222222222222222222222222222", aiComments: "BBBBBBBBBBBBBBBBBBBB BBBBBBBBBBBBBBBB" },
        { date: new Date(2024, 6, 5), image: "그저그래요", title: "제목 3", content: "내용이에요 33333333333 3333333333 3333333333333333333333333 33333333333  33333333333333333333333333  3333333333333333", aiContent: "CCCC DDD  CCCCCCCCCCCC CCCCCCCCCCCCCCCCCCCCCCCCCCCC  CCCCCCCCCCCCCCCCCCCCCCC CCCCCCCCccc" },
        { date: new Date(2024, 7, 2), image: "행복해요", title: "제목 4", content: "내용이에요. 4444444444444444444444", aiComments: "DDDD DDDDDDDDDDDDDDDD" },
        // ... more dates
    ];

    const tryGetDiaryDate= async () => {
        let date;
        const userData = JSON.parse(sessionStorage.getItem('user'));
        const token = sessionStorage.getItem('token')
        axios.get(`https://sub.skuhackathon.shop/diary/${userData.userID}/diaries`)
            .then(response => {
                console.log(response.data)
                    if (!response.result)
                    date = response.data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        //return date;
    }
    const datesWitImages1 = tryGetDiaryDate();
    const onClickDay = (data) => {
        if (data) {
            setClickedData(data);
            setModalSwitch(true);
        } else {
            setClickedData(null);
            setModalSwitch(false);
        }
    };

    return (
        <>
            <S.UserPageContainer>
            <Back to="/"></Back>
                <M.ModalContainer show={modalSwitch ? "true" : undefined}>
                    <M.ModalContent>
                        <M.ModalImage src={clickedData && emogi[clickedData.image]}></M.ModalImage>
                        <M.CloseButton onClick={() => setModalSwitch(false)} />
                        <span>
                            <M.ModalDateBold>{clickedData && clickedData.date.getFullYear()}</M.ModalDateBold>
                            <M.ModalDate>년</M.ModalDate>
                            <M.ModalDateBold>{clickedData && clickedData.date.getMonth()}</M.ModalDateBold>
                            <M.ModalDate>월</M.ModalDate>
                            <M.ModalDateBold>{clickedData && clickedData.date.getDate()}</M.ModalDateBold>
                            <M.ModalDate>일 {clickedData && daysOfWeekNames[clickedData.date.getDay()]}요일의</M.ModalDate>
                            <M.ModalDateBold>쓰임</M.ModalDateBold>
                        </span>

                        <M.ModalTitle>{clickedData && clickedData.title}</M.ModalTitle>
                        <M.ModalBodyContain>
                            <M.ModalBody>{clickedData && clickedData.content}</M.ModalBody>
                        </M.ModalBodyContain>
                        <M.ModalExtra>
                            <h3>AI 쓰감 선생님의 한 마디</h3>
                            <p>{clickedData && clickedData.aiComments}</p>
                        </M.ModalExtra>
                    </M.ModalContent>
                </M.ModalContainer>
                <S.IntroContainer>
                    <h1>이번 달 나의 쓰임</h1>
                    <p>과거의 나는 어떤 기록을 남겼을까요?</p>
                    <p>지난 나의 자취를 보며 스스로를 쓰담어주세요</p>
                </S.IntroContainer>
                <CalendarView date={datesWitImages} onClick={onClickDay} />
            </S.UserPageContainer>
        </>
    );
}