import styled from 'styled-components';
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 0 20px;
`;
export const LoginLine = styled.nav`
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
export const LoginLegacy = styled.button`
    color: #98989E;
    bakcground : none;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Pretendard', sans-serif;
`