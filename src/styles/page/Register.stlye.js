import styled from 'styled-components';
export const RegisteContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    padding-top : 70px;
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
        margin-top : 10px;
    }
    input{
        font-weight: 400;
        font-size: 18px;
        font-family: Pretendard, sans-serif;
        padding-left : 10px;
    }
`;
export const ProfileContainer = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin : 10px 0;
`;
export const btnEdit = styled.img`
    position: absolute;
    right : 0%;
    bottom : 0%;
    transform : translate(20%, 20%);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 29px; 
        height: 29px;
    }
`;
export const HiddenInput = styled.input`
    display: none;
`;
export const Intro = styled.div` 
    display: flex;
    width: 83%;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
    h6 {
        font-size: 24px;
        font-weight: 600;
        font-family: Pretendard, sans-serif;
        text-align: left;
        color : #555555;
        margin : 10px 0;
    }
    p {
        font-weight: 300;
        font-size: 12px;
        font-family: Pretendard, sans-serif;
        text-align: left;
        margin-top : 0px;
        color : #555555;
    }
    span{
        font-weight: 800;
    }
`;
export const Profile = styled.div`
    width: 81px;
    height: 81px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(/src/assets/Login/profile.png);
`;
export const Profile2 = styled.div`
    width: 87px;
    height: 87px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url();
`;
export const RadioGroupContainer = styled.div`
    display: flex;
    position: relative;
    width : 100%;
    flex-direction: row;
    gap : 7px;
`;

export const RadioButtonInput = styled.button`
    display: flex;
    position: relative;
    justify-content : center;
    align-items: center;
    width : 70px;
    height : 40px;
    padding: 0;
    border-radius: 0%;
    border-bottom: 1px solid #D7D8E0;
    outline: none;
    background-color: ${props => (props.selected ? '#93BAF3' : 'white')};
    color: ${props => (props.selected ? 'white' : '#B5B6BD')};
    box-shadow: ${props => (props.selected ? 'inset 0 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-size: 16px;

    &:hover {
    background-color: #93BAF3;
    border: none;
    color: white;
    }
    &:focus {
        outline: none;
        box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    font-weight: 500;
    font-size: 16px;
    font-family: Pretendard, sans-serif;
    text-align: center;
    
`;
export const WordListContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 100vh;
    margin-top : 70px;
    padding-top : 0px;
    >h6 {
        font-size: 32px;
        font-weight: 600;
        font-family: Pretendard, sans-serif;
        margin : 0px 0;
    }
    >p {
        font-weight: 600;
        font-size: 13px;
        font-family: Pretendard, sans-serif;
        margin-top : 10px;
        color : #555555;
        text-decoration: underline;
    }
    input{
        font-weight: 400;
        font-size: 18px;
        font-family: Pretendard, sans-serif;
        padding-left : 10px;
    }
`;

export const ProflePageContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-top : 70px;
    h6 {
        font-size: 32px;
        font-weight: 600;
        font-family: Pretendard, sans-serif;
        margin : 0px 0;
    }
}
`;
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    overflow-y: auto;
    box-sizing: border-box;
    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;
export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    width: 83%;
    height: auto;
    background-color: #D0DAE87F;
    border-radius: 20px;
    padding: 27px 15px 19px 15px;
    margin-top: 35px;
    box-sizing: border-box;
    hr {
        width : 80%;
        height: 1px;
        background: #555555;
        border: none;
        margin: 0;
    }

    h1 {
        font-size: 16px;
        font-weight: 600;
        font-family: Pretendard, sans-serif;
    }

    >p {
        font-size: 16px;
        font-weight: 400;
        font-family: Pretendard, sans-serif;
        text-align: center;
        margin: 8px 0 17px 0;
    }

    .name {
        font-weight: 500;
    }
`;
export const FinalPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin-top: 63px;
    overflow: hidden;
    &.party{
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url('../assets/Login/icon_Party.png');
    }
    h1{
        font-size: 24px;
        font-weight: 600;
        font-family: Pretendard, sans-serif;
        text-align: center;
    }
    p{
        color: #98989E;
        font-size: 16px;
        font-weight: 400;
        font-family: Pretendard, sans-serif;
        text-align: center;
    }
}
`;
export const PreviewContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    min-width: 260px;
    width: 75%;
    height: 354px;
`
export const Preview = styled.img`
    min-width: 270px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('../assets/Login/icon_Party.png');
`
export const FixSubmit = styled.button` 
    display : flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    width: 83%;
    height: 50px; 
    boarder-radius: 10px;
    background: #B5B6BD;
    color: white;
    left: 50%;
    bottom: 3%;
    transform: translate(-50%, 0);
    background-color: #93BAF3;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;