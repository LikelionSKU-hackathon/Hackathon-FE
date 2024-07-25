import * as M from "../styles/components/Modal"
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

const emogi = [ang, sad, soso, happy, good, upset];

export default function MyDiaryModal(){
    const getFormattedDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        const dayOfWeek = daysOfWeek[date.getDay()];
    
        return (
            <>
              <M.ModalDateBold>{year}</M.ModalDateBold>
              <M.ModalDate>년</M.ModalDate>
              <M.ModalDateBold>{month}</M.ModalDateBold>
              <M.ModalDate>월</M.ModalDate>
              <M.ModalDateBold>{day}</M.ModalDateBold>
              <M.ModalDate>일 {dayOfWeek}요일의</M.ModalDate>
              <M.ModalDateBold>쓰임</M.ModalDateBold>
            </>
        );
    };

    return (
        <>
            <M.ModalHeader>
            <h6>오늘의 기록<br />저장 완료!</h6>
            <p>
                오늘 하루도 수고 많았어요 :) <br />
                쓰담AI와 다른 유저들의 이야기를 통해 일기를 마무리 해보세요
            </p>
            </M.ModalHeader>
            <M.ModalContent> 
                <M.ModalImage src={emogi[0]}></M.ModalImage>
                <M.CloseButton onClick={() => setModalSwitch(false)} />
                <span>
                    {getFormattedDate()}
                </span>

                <M.ModalTitle>제목</M.ModalTitle>
                <M.ModalBodyContain>
                    <M.ModalBody>내용aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</M.ModalBody>
                </M.ModalBodyContain>
                <M.ModalExtra>
                    <h3>AI 쓰감 선생님의 한 마디</h3>
                    <p>고생했어요ㄴㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</p>
                </M.ModalExtra>
            </M.ModalContent>
            <M.MoreButton to="/diary">더 많은 이야기 보러가기</M.MoreButton>
        </>
    );
}