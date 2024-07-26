import React, { useState, useEffect } from "react";
import * as M from "../styles/components/Modal";
import StoryBox from "../components/StoryBox";
import * as S from "../styles/page/Main.style";
import Back from "../components/Back";
import OtherDiaryModal from '../components/OtherDiaryModal';

export default function DiaryList() {
    const [modalSwitch, setModalSwitch] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);

    const handleStoryBoxClick = () => {
        setModalSwitch(true);
        setCurrentModal('OtherDiary');
    };

    return (
        <S.Container>
            <M.ModalContainer show={modalSwitch}>
                {currentModal === 'OtherDiary' && <OtherDiaryModal setModalSwitch={setModalSwitch} />}
            </M.ModalContainer>
            <Back to="/" />
            <S.Title>더 많은 이야기 구경하기</S.Title>
            <S.SubTitle>나와 비슷하지만 또 다른 사람들의 이야기를 보며<br />
                공감하고, 조언을 하며 내 삶을 되돌아 보세요
            </S.SubTitle>
            <StoryBox className="list" onClick={handleStoryBoxClick} />
            <StoryBox className="list" onClick={handleStoryBoxClick} />
            <StoryBox className="list" onClick={handleStoryBoxClick} />
            <StoryBox className="list" onClick={handleStoryBoxClick} />
        </S.Container>
    );
}
