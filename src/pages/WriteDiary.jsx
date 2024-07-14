import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

const Box = styled.div`
    width: 280px;
    height: 45px;
    background: rgb(245,245,245);
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 12px;
    font-weight: 400;
    white-space: pre-line;
    margin: 20px;
    padding: 10px;
`;


export default function LoginPage() {
    return (
        <Container>
            <h4>일기 쓰기</h4>
        </Container>
    );
}