import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import styled from "styled-components";

const Box = styled.div`
    width : 300px;
    height : 65px;
    background : rgb(208,208,208);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow : hidden;
    margin : 20px
    font-size : 12px;
    white-space: pre-line;
    margin : 20px;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export default function HomePage() {
    return (
        <Container>
            <h1>홈페이지</h1>
            <Box>
                오늘의 일기 주제 #14<br></br>
                ENFJ로 살면서 느끼는 장점과 단점은?
            </Box>
            <Box>
                <h3>나의 일기 기록 보러 가기</h3>
            </Box>

        </Container>
    );
}