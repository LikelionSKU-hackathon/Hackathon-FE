import React from "react";
import { Link } from "react-router-dom";
import StoryBox from "../components/StoryBox";
import * as S from "../styles/page/Main.style"
import Back from "../components/Back";

export default function DiaryList() {

    return (
        <S.Container >
            <Back to="/"/>
            <S.Title>더 많은 이야기 구경하기</S.Title>
            <S.SubTitle>나와 비슷하지만 또 다른 사람들의 이야기를 보며<br />
            공감하고, 조언을 하며 내 삶을 되돌아 보세요</S.SubTitle>
            <StoryBox className="list"/>
            <StoryBox className="list"/>
            <StoryBox className="list"/>
            <StoryBox className="list"/>
        </S.Container>
    );
}