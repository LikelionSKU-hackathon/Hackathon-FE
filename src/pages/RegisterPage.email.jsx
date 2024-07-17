import React, { useEffect, useState, useRef } from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import * as S from "../styles/page/Register.stlye";
import * as L from "../styles/page/Login.stlye";
import profile from "../assets/Login/profile.png";
import icon from "../assets/Login/icon_edit.png";
import Back from "../components/Back";

export default function RegisterPageEmail() {
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const fileInputRef = useRef(null);
    const isFormValid = userId !== '' && pwd !== '' && name !== '' && age !== 0;
    const location = useLocation();
    const navigate = useNavigate();
    const { message } = location.state || "1";
    //console.log({message});
    // 선택된 나이
    const handleChange = (value) => {
        setAge(value);
    };
    // 프로필 이미지
    const [profileImage, setProfileImage] = useState({ profile });
    // 이미지 설정
    const handleImageChange = (event) => {
        fileInputRef.current.click();
        const fileInput = document.getElementById('fileInput');
        const fileView = document.getElementById('fileView');

        fileInput.addEventListener('change', function (event) {
            if (fileInput.files && fileInput.files[fileInput.files.length - 1]) {
                const reader = new FileReader();

                reader.onload = function (event) {
                    const imageURL = event.target.result;
                    fileView.style.backgroundImage = `url(${imageURL})`;
                };

                reader.readAsDataURL(fileInput.files[fileInput.files.length - 1]);
            }
        });
    };
    // register 테스트
    const tryRegister = (e) => {
        console.log('button clicked');
        e.preventDefault();
        console.log(`userId: ${userId}, pwd: ${pwd}, name: ${name}, age: ${age}`);
        navigate('/register/word');
    };
    return (
        <S.RegisteContainer>
            <Back to = "/register"></Back>
            <h6>프로필을</h6>
            <h6>입력해주세요</h6>

            <S.ProfileContainer>
                <S.Profile
                    id="fileView"
                    alt="Profile"
                />
                <S.HiddenInput
                    id="fileInput"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    ref={fileInputRef}
                />
                <S.btnEdit htmlFor="imageInput" src={icon} onClick={handleImageChange} />
            </S.ProfileContainer>

            <L.InputText>이메일</L.InputText>
            <L.InputLine
                type="text"
                value={userId}
                autoFocus
                placeholder="이메일을 입력하세요"
                onChange={(e) => setUserId(e.target.value)}
            />
            <L.InputText>비밀번호</L.InputText>
            <L.InputLine
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="비밀번호 입력하세요"
            />
            <L.InputText>닉네임</L.InputText>
            <L.InputLine
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="8글자 내로 입력"
            />
            <L.InputText>나이</L.InputText>
            <S.RadioGroupContainer>
                <S.RadioButtonInput
                    selected={age === 'option1'}
                    onClick={() => handleChange("10")}>
                    <p>10대</p>
                </S.RadioButtonInput>
                <S.RadioButtonInput
                    selected={age === 'option2'}
                    onClick={() => handleChange("20")}
                >
                    <p>20대</p>
                </S.RadioButtonInput>
                <S.RadioButtonInput
                    selected={age === 'option3'}
                    onClick={() => handleChange("30")}
                >
                    <p>30대</p>
                </S.RadioButtonInput>
                <S.RadioButtonInput
                    selected={age === 'option3'}
                    onClick={() => handleChange("40")}
                >
                    <p>40대</p>
                </S.RadioButtonInput>
            </S.RadioGroupContainer>
            <L.InputSubmit onClick={tryRegister} disabled={!isFormValid}><p>입력완료</p></L.InputSubmit>
        </S.RegisteContainer>
    );
}