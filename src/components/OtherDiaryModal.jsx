import * as M from "../styles/components/Modal"
import Send from "./Send";
import ang from '../assets/myPage/icon_ang.svg';
import good from '../assets/myPage/icon_good.svg';
import happy from '../assets/myPage/icon_happy.svg';
import sad from '../assets/myPage/icon_sad.svg';
import soso from '../assets/myPage/icon_soso.svg';
import upset from '../assets/myPage/icon_upset.svg';

const emogi = [ang, sad, soso, happy, good, upset];

export default function OtherDiaryModal({ setModalSwitch }){
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

    return(
        <M.ModalContent>
            <M.ModalImage src={emogi[0]}></M.ModalImage>
            <M.CloseButton onClick={() => setModalSwitch(false)} />
            <span>
                {getFormattedDate()}
            </span>

            <M.ModalTitle>제목</M.ModalTitle>
            <M.ModalBodyContain>
                <M.ModalBody>
                    내용aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </M.ModalBody>
                
            </M.ModalBodyContain>
            <M.CommentContain>
                <M.ModalLike><div><M.SHeartFilled /><h6>19</h6></div></M.ModalLike>
                <M.Line />
                <h3>이 이야기에 달린 코멘트들</h3>
                <M.CommentDiv>
                    <M.Comment>
                        <h5>냥냥냥 </h5><p>재밌어요</p>
                    </M.Comment>
                    <M.Comment></M.Comment>
                    <M.Comment></M.Comment>
                    <M.Comment></M.Comment>
                </M.CommentDiv>
                <Send />
            </M.CommentContain>
        </M.ModalContent>
    );
}