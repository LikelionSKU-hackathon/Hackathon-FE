import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { useNavigate, useLocation } from "react-router-dom";
import Back from "../components/Back"
import * as S from "../styles/page/UserPage.style";
import icon from "../assets/Login/icon_edit.png";
import CalendarView from "../components/CalendarView";
export default function UserPage() {
    const isLogin = useRecoilState(isLoginSelector);
    const today = new Date();
    const [date, setDate] = useState(today);

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
        { date: new Date(2024, 6, 1), image: 0 },
        { date: new Date(2024, 6, 2), image: 1 },
        { date: new Date(2024, 6, 5), image: 4 },
        // ... more dates
    ];
    return (
        <S.UserPageContainer>
            <Back></Back>
            <S.IntroContainer>
                <h1>이번 달 나의 쓰임</h1>
                <p>과거의 나는 어떤 기록을 남겼을까요?</p>
                <p>지난 나의 자취를 보며 스스로를 쓰담어주세요</p>
            </S.IntroContainer>
            <CalendarView date = {datesWithImages} />
        </S.UserPageContainer>
    );
}