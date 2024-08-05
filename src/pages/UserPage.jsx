import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
    const [clickedData, setClickedData] = useState(null);
    const [dirary, setDirary] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const daysOfWeekNames = ["일", "월", "화", "수", "목", "금", "토"];
    const emogi = { "화나요": ang, "슬퍼요": sad, "그저그래요": soso, "행복해요": happy, "기뻐요": happy, "뿌듯해요": good, "속상해요": upset };
    const navigate = useNavigate();
    // 로그인 여부 확인
    const login = JSON.parse(sessionStorage.getItem('login'));
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if (userData)
        console.log("userData : " + Object.entries(userData));
    const token = sessionStorage.getItem('token')
    //console.log("token : " + Object.entries(token));
    if (token)
        console.log("token : " + token);
    const addDirary = (newDirary) => {
        setDirary((d) => [...d, newDirary]);
    };

    useEffect(() => {
        //console.log(login);
        // login 확인
        if (!login) {
            alert("로그인이 필요합니다.");
            navigate('/login', { replace: true, state: { redirectedFrom: window.location.pathname } });
        }
        else {
            console.log("로그인 되어있음");
            //const id = userData.userId;
            const id = userData.userId;
            console.log("id : " + id);
            // 데이터 추가
            const diaryData = axios.get(`https://sub.skuhackathon.shop/diary/month/${year}/${month}`
                , {
                    headers: {
                        'Accept': '*/*',
                        'Authorization': `Bearer ${token}`  // JWT 토큰 설정
                    }
                })
                .then(response => {
                    dirary.push(response.data)
                    console.log("dirary 0 : " + response.data);
                    console.log("dirary 0 : " + typeof (response.data.result.emojiDTOList));
                    // 임시 추가
                    console.log("dirary 1 : " + Object.keys(response.data.result.emojiDTOList[0]));
                    console.log("dirary 1 : " + response.data.result.emojiDTOList.length);
                    console.log("dirary 1 : " + response.data.result.emojiDTOList[0].day);
                    console.log("dirary 1 : " + Object.entries(response.data.result.emojiDTOList[0]));
                    setDirary(response.data.result.emojiDTOList);

                    console.log("dirary 2 : " + dirary.length);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, []);

    const tryGetDiary = async (diaryId) => {
        let date;
        if (!diaryId) return;
        // id 로 일기 받기
        axios.get(`https://sub.skuhackathon.shop/diary/${diaryId}`, {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${token}`  // JWT 토큰 설정
            }
        })
            .then(response => {
                console.log("response.data : " + response.data);
                setClickedData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        //return date;
    }
    const onClickDay = async (data) => {
        if (data) {
            await tryGetDiary(data.diaryId);
            setModalSwitch(true);
        } else {
            tryGetDiary(null);
            setModalSwitch(false);
        }
    };
    const onChangeMonth = async (date) => {
        setYear(date.getFullYear());
        console.log("year : " + year);
        setMonth(date.getMonth() + 1);
        console.log("month : " + (month+1));
    }
    return (
        <>
            <S.UserPageContainer>
                <Back to="/main"></Back>
                <M.ModalContainer show={modalSwitch ? "true" : undefined}>
                    <M.ModalContent>
                        <M.ModalImage src={clickedData && clickedData.moodImage}></M.ModalImage>
                        <M.CloseButton onClick={() => setModalSwitch(false)} />
                        <span>
                            <M.ModalDateBold>{clickedData && new Date(clickedData.createdAt).getFullYear()}</M.ModalDateBold>
                            <M.ModalDate>년</M.ModalDate>
                            <M.ModalDateBold>{clickedData && new Date(clickedData.createdAt).getMonth()}</M.ModalDateBold>
                            <M.ModalDate>월</M.ModalDate>
                            <M.ModalDateBold>{clickedData && new Date(clickedData.createdAt).getDate()}</M.ModalDateBold>
                            <M.ModalDate>일 {clickedData && daysOfWeekNames[new Date(clickedData.date).getDay()]}요일의</M.ModalDate>
                            <M.ModalDateBold>쓰임</M.ModalDateBold>
                        </span>

                        <M.ModalTitle>{clickedData && clickedData.title}</M.ModalTitle>
                        <M.ModalBodyContain>
                            <M.ModalBody>{clickedData && clickedData.content}</M.ModalBody>
                        </M.ModalBodyContain>
                        {clickedData && clickedData.aiComments ? (
                            <M.ModalExtra>
                                <h3>AI 쓰감 선생님의 한 마디</h3>
                                <p>{clickedData.aiComments}</p>
                            </M.ModalExtra>
                        ) : (
                            <M.ModalExtraLoading />
                        )}
                    </M.ModalContent>
                </M.ModalContainer>
                <S.IntroContainer>
                    <h1>이번 달 나의 쓰임</h1>
                    <p>과거의 나는 어떤 기록을 남겼을까요?</p>
                    <p>지난 나의 자취를 보며 스스로를 쓰담어주세요</p>
                </S.IntroContainer>
                <CalendarView date={dirary} onClick={onClickDay} onChange = {onChangeMonth}/>
            </S.UserPageContainer>
        </>
    );
}