import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import Back from "../components/Back";
import FixLine from "../components/FixLine";
export default function RegisterPageProfile() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [profileImage, setProfileImage] = useState();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== 0;
    const location = useLocation();
    const navigate = useNavigate();
    const message = location.state || {};
    console.log({message});
    const [emojis, setEmoji] = useState(
        {
            "연애 및 대인관계": "❤️",
            "진로 및 취업": "🧩",
            "정신건강": "🧠",
            "생활문제": "🏡",
            "학업 및 자격증": "✏️",
        }
    );
    var emoji = ["❤️", "🧩", "🧠", "🏡", "✏️"];
    var tag = ["연애 및 대인관계", "진로 및 취업", "정신건강", "생활문제", "학업 및 자격증"];
    const options = [
        [
            emojis["연애 및 대인관계"],
            tag[0],
            "1111"
        ],
        [
            emojis["정신건강"],
            tag[1],
            "연2222"
        ],
        [
            emojis["학업 및 자격증"],
            tag[3],
            "연애 3333"
        ],
        [
            emojis["생활문제"],
            tag[4],
            "연애 444"
        ],
        [
            emojis["진로 및 취업"],
            tag[2],
            "연애 55"
        ],
    ];
    // 이미지 설정
    const setImage = (event) => {
        const fileView = document.getElementById('fileView');
        if(message)
            fileView.style.backgroundImage = `url(${profileImage})`;
        // fileInputRef.current.click();
        // const fileInput = profileImage;
        // const fileView = document.getElementById('fileView');
        // const reader = new FileReader();
        // reader.onload = function (event) {
        //     const imageURL = event.target.result;
        //     fileView.style.backgroundImage = `url(${imageURL})`;
        //     setProfileImage(window.getComputedStyle(fileView).backgroundImage);
        // };
        // reader.readAsDataURL(fileInput.files[fileInput.files.length - 1]);

    };
    const tryRegister = (e) => {
        console.log('button clicked');
        e.preventDefault();
        console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
        navigate('/register/final');
    }
    // test
    useEffect(() => {
        if (message) {
            setUserId(message.userId);
            setPwd(message.pwd);
            setName(message.name);
            setAge(message.age);
            setProfileImage(message.img);
            setSelectedOptions(message.selectedOptions);
            setImage();
            console.log("데이터 확인 in /profile");
        }
        else {
            alert("데이터 없음");
            //navigate('/register/email');
        }
    }, []);


    return (
        <>
            <Back to="/register/word"></Back>
            <S.ProflePageContainer>
                <S.Intro>
                    <h6>쓰담쓰담에서
                        <br />사용할 나의 프로필</h6>
                </S.Intro>
                <S.ProfileBox>
                    <S.Profile2
                        id="fileView"
                        alt="Profile" />
                    <p><span className="name">{name}</span>님의
                        <br />이야기가 기록 될 프로필 입니다 :)</p>
                    <hr></hr>
                    <h1>{age} 나의 주요고민</h1>
                    {message && (
                        <>

                        </>
                    )}
                </S.ProfileBox>
                <L.InputSubmit
                    onClick={tryRegister}>
                    <p>확인완료</p>
                </L.InputSubmit>
            </S.ProflePageContainer>
        </>
    );
}