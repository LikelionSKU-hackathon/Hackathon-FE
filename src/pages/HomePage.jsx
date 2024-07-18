import * as S from "../styles/page/Main.style"
import { NavLink } from "react-router-dom";

function HomePage() {
    let diaryNum = 14;
    let topic = '현재 나의 애인과 가치관 차이로 생긴 문제는?';
    let nickName = '훈이 말고 훈기';
    let age = '20대';
    let hashtag = ["감정고민", "직장생활", "인간관계"];
    let tag = '연애 및 대인관계';
    
    return (
        <S.Container>
            
            <S.TextDiv>
                <h6>쓰담쓰담<br/>하루의 끝<br/>나의 마음일기</h6>
                <p>오로지 나만을 위한 일기를 써보세요</p>
            </S.TextDiv>

            <S.ProfileBox>
                <S.Circle></S.Circle>
                <S.ProfileText>
                    <h6>{nickName}</h6>
                    <p>{age} / #{hashtag[0]} #{hashtag[1]} #{hashtag[2]} </p>
                </S.ProfileText>
            </S.ProfileBox>

            <S.QBox className="question">
                <h6>TODAY<br/>QUESTION</h6>
                <h5>#{tag}</h5>
                <p>Q. {topic}</p>
            </S.QBox>
            <S.ChangeButton>주제 변경하기</S.ChangeButton>

            <div style={{gap : '14px'}}> 
                <S.DiaryButton className="free" to="/WriteDiary">
                    <p>MY STROY<br/>자유주제로<br/>일기쓰기</p>
                </S.DiaryButton>
                <S.DiaryButton className="daily" to="/WriteDiary">
                    <p>MY STROY<br/>지정주제로<br/>일기쓰기</p>
                </S.DiaryButton>  
            </div>
            
            <S.QBox className="history">
                <h6>MY<br/>HISTORY</h6>
                <h5>나의 일기 기록 모아보기</h5>
            </S.QBox>

            <S.StoryBox>

            </S.StoryBox>
        </S.Container>
    );
}

export default HomePage;
