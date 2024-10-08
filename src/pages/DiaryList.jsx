import React, { useState, useEffect } from "react";
import * as M from "../styles/components/Modal";
import StoryBox from "../components/StoryBox";
import * as S from "../styles/page/Main.style";
import Back from "../components/Back";
import OtherDiaryModal from '../components/OtherDiaryModal';
import { getDiaryList } from "../api/diaryAPI";

export default function DiaryList() {
    const [modalSwitch, setModalSwitch] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);
    const [currentDiaryId, setCurrentDiaryId] = useState(null); // 현재 다이어리 ID를 저장할 상태 추가
    const [diaryList, setDiaryList] = useState([]);

    const handleStoryBoxClick = (diaryId) => {
        setModalSwitch(true);
        setCurrentModal('OtherDiary');
        setCurrentDiaryId(diaryId); // 클릭된 다이어리 ID 설정
    };

    useEffect(() => {
        const fetchDiaryList =  async () => {
            const data = await getDiaryList();
            if (data && data.isSuccess) {
                setDiaryList(data.result.diaryList);
                console.log('list[0]: ',data.result.diaryList[0]);
            } else {
                console.error('Error fetching diary list:', data.message);
            }
        };
        fetchDiaryList();
    }, []);

    return (
        <S.Container>
            <M.ModalContainer show={modalSwitch}>
                {currentModal === 'OtherDiary' && <OtherDiaryModal setModalSwitch={setModalSwitch} diaryId={currentDiaryId} />} {/* diaryId 전달 */}
            </M.ModalContainer>
            <Back to="/" />
            <S.Title>더 많은 이야기 구경하기</S.Title>
            <S.SubTitle>나와 비슷하지만 또 다른 사람들의 이야기를 보며<br />
                공감하고, 조언을 하며 내 삶을 되돌아 보세요
            </S.SubTitle>
            {diaryList.map(diary => (
                <StoryBox 
                    key={diary.diaryId} 
                    diary={diary} 
                    onClick={() => handleStoryBoxClick(diary.diaryId)} 
                />
            ))}
        </S.Container>
    );
}
