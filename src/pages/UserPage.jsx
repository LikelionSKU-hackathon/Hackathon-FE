import React,{useEffect} from "react";
import { useRecoilState } from "recoil";
import { isLoginSelector, tokenState } from "../Recoil/TokenAtom";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/page/UserPage.style";
export default function UserPage() {
    const isLogin = useRecoilState(isLoginSelector);
    const currentLocation = useLocation();
    useEffect(() => {
        // login 확인
        console.log(`isLogin: ${isLogin}`);
        if (!isLogin) {
            <Navigate
                to={'/login'}
                replace
                state={{ redirectedFrom: currentLocation }}
            />
        }
    }, []);
    return (
        <UserPageContainer>
            <h1>사용자 페이지</h1>
        </UserPageContainer>
    );
}