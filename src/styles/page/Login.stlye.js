import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 100vh;
`;
export const Intro = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    gap: 0px;
    h6 {
        font-size: 32px;
        font-weight: 600;
        font-family: Pretendard, sans-serif;
        margin : 0px 0;
    }
    p {
        font-weight: 500;
        font-size: 18px;
        font-family: Pretendard, sans-serif;
        margin-top : 0px;
    }
`;
export const InputText = styled.p` 
    font-weight: 500;
    font-size: 14px;
    font-family: Pretendard, sans-serif;
    color : #98989E;
`;
export const InputLine = styled.input` 
    width: 100%;
    height: 40px;
    font-weight: 400;
    font-size: 18px;
    outline: none;
    border: none;
    color : #B5B6BD;
    border-bottom: 1px solid #B5B6BD;
`;
export const InputHide = styled.button` 
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #007bff;

    &:hover {
        text-decoration: underline;
    }
`;
export const InputSubmit = styled.button` 
    display : flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px; 
    radius: 10px;
    background: #B5B6BD;
    color: white;
    margin : 32px 0;
    background-color: ${props => (props.disabled ? '#B5B6BD' : '#93BAF3')};
`;
export const ModuleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 0;
`;



export const LoginLine = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin: 7.5px 0;
    gap: 8px;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Pretendard', sans-serif;

    img{
        width: 39px;
        height : 39px;
    }
    .p{
        margin-left: 40px;
    }
    &.naver{
        background-color: #00C73C;
        color: white;
    }
    &.kakao{
        background-color: #FEE500;
        color: black;
    }
    &.google{
        background-color: #131A22;
        color: white;
    }
    .div{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;
export const LoginLegacy = styled(Link)`
    display: inline-block;
    color: #98989E;
    background: none;
    margin: 25px 17px;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Pretendard', sans-serif;
`