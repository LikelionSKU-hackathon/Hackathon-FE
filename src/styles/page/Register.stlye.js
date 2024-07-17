import styled from 'styled-components';
export const RegisteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    margin-top : 90px;
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
    margin : 20px 0;
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
export const Profile = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url();
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
    width : 100%;
    flex-direction: row;
    gap : 7px;
`;

export const RadioButtonInput = styled.button`
    display: flex;
    justify-content : center;
    width : 70px;
    height : 40px;
    padding: 0;
    border: none;
    border-radius: 0%;
    border-bottom: 1px solid #B5B6BD;
    outline: none;
    background-color: ${props => (props.selected ? '#93BAF3' : 'white')};

    color: #B5B6BD;
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
        border-bottom: 2px solid gray;
    }
    .p{
        font-weight: 500;
        font-size: 16px;
        font-family: Pretendard, sans-serif;
    }
`;
export const WordListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-top : 90px;
    h6 {
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
        text-decoration: underline;
    }
    input{
        font-weight: 400;
        font-size: 18px;
        font-family: Pretendard, sans-serif;
        padding-left : 10px;
    }
`;
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap : 15px;
`;
export const ProflePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 15px;

}
`;
export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 640px;
    background-color: #D0DAE87F;
    border-radius: 20px;
    padding: 27px 15px;

    hr {
        width : 80%;
        height: 1px;
        background: #555555;
        border: none;
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
    }

    .name {
        font-weight: 500;
    }
`;