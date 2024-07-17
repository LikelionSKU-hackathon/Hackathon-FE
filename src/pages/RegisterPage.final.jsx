import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import WordLine from "../components/WordLine";
import icon from "../assets/Login/icon_edit.png";
export default function RegisterPageFinal() {
    const location = useLocation();
    const navigate = useNavigate();
    const { message } = location.state || "1";
    //console.log({message});

    return (
        <S.WordListContainer>
            <h1>반갑습니다.</h1>
        </S.WordListContainer>
    );
}