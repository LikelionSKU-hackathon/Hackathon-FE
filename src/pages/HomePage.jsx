import * as S from "../styles/page/Main.style"
import { NavLink } from "react-router-dom";

function HomePage() {
    let diaryNum = 14;
    let topic = 'ENFJ로 살면서 느끼는 장점과 단점은?';
    let nickName = '훈이 말고 훈기';
    let age = '20대';
    let hashtag = ["감정고민", "직장생활", "인간관계"];
    
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
            <S.Box>
                <span>
                    오늘의 일기 주제 #{diaryNum}<br />
                    {topic}
                </span>
            </S.Box>
            <S.ButtonBox>
                <span>나의 일기 기록 보러 가기</span>
            </S.ButtonBox>
            <div> 
                <S.DiaryButton className="free" to="/WriteDiary">
                    <p>MY STROY<br/>자유주제로<br/>일기쓰기</p>
                </S.DiaryButton>
                <S.DiaryButton className="daily" to="/WriteDiary">
                    <p>MY STROY<br/>지정주제로<br/>일기쓰기</p>
                </S.DiaryButton>  
            </div>
            <S.Box style={{ height: '400px', fontWeight: '800', fontSize: '16px', flexDirection: 'column' }}>
                <span>오늘 키다의 인기 이야기꾼 </span>
                <div style={{ display: 'flex', flexDirection: 'row', whiteSpace: 'nowrap', margin: '20px' }}>
                    <S.DiaryButton style={{width: '150px', height: '170px'}}> 
                        TOP1.
                    </S.DiaryButton>
                    <S.DiaryButton style={{width: '150px', height: '170px'}}>
                        TOP2.
                    </S.DiaryButton>
                    <S.DiaryButton style={{width: '150px', height: '170px'}}>
                        TOP3.
                    </S.DiaryButton>
                </div>
                <S.DiaryButton style={{width: '270px', height: '40px', fontWeight: '800', fontSize: '15px'}}>
                    <span>더 많은 이야기 보러 가기</span>
                </S.DiaryButton>
            </S.Box>
        </S.Container>
    );
}

export default HomePage;
