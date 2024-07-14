import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    width: 280px;
    height: 45px;
    background: rgb(245,245,245);
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 12px;
    font-weight: 400;
    white-space: pre-line;
    margin: 20px;
    padding: 10px;
`;

const ButtonBox = styled.button`
    width: 300px;
    height: 65px;
    background: rgb(245,245,245);
    display: flex;
    align-items: center;
    overflow: hidden;
    font-size: 14px;
    font-weight: 800;
    white-space: pre-line;
    margin: 20px;
    padding: 10px;
    justify-content: center;
    border-radius: 0px;
`;

const MusicBox = styled.div`
    width: 280px;
    height: 50px;
    margin: 20px;
    padding: 10px;
    background: rgb(17,17,17);
    border-radius: 100px;
    align-items: center;
    padding: 10px;
    display: flex;
`;

const ScrollBox = styled.div`
    width: 100%; /* 부모 요소의 너비에 맞춤 */
    height: 140px;
    font-weight: 400;
    font-size: 9px;
    overflow-x: auto; /* 가로 스크롤 활성화 */
    white-space: nowrap; /* 자식 요소들이 가로로 일렬로 배치되도록 함 */
    display: flex; /* 플렉스 박스 속성 */
    align-items: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

const DiaryButton = styled.button`
    background: rgb(217, 217, 217);
    width: 110px;
    height: 60px;
    margin: 10px; /* 버튼 사이 간격 조정 */
    padding: 10px;
    font-weight: 500;
    font-size: 14px;
    white-space: normal; /* 텍스트 자동 줄바꿈 */
    word-break: break-word; /* 단어 줄바꿈 */
    display: block;
    border-radius: 10px;
`;

const Circle = styled.div`
    background: rgb(217,217,217);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
`;

function HomePage() {
    let diaryNum = 14;
    let topic = 'ENFJ로 살면서 느끼는 장점과 단점은?';
    let music = '저번주 듣던 명상곡';

    return (
        <Container>
            <h4>홈페이지</h4>
            <MusicBox>
                <Circle></Circle>
                <div style={{flexDirection: 'column'}}>
                    <span style={{fontSize: '15px', color: "white", fontWeight: '400'}}>{music}</span><br/>
                    <span style={{fontSize: '12px', color: 'rgb(153,153,153)', fontWeight: '400'}}>{music}</span>
                </div>
            </MusicBox>
            <Box>
                <span>
                    오늘의 일기 주제 #{diaryNum}<br />
                    {topic}
                </span>
            </Box>
            <ButtonBox>
                <span>나의 일기 기록 보러 가기</span>
            </ButtonBox>
            <Box style={{ height: '105px', fontSize: '14px', fontWeight: '800', justifyContent: 'center', flexDirection: 'column' }}>
                <span>오늘 일기 작성하기</span>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <NavLink to="/writeDiary" style={{ textDecoration: 'none' }}>
                        <DiaryButton>
                            <span>지정주제로<br/> 일기쓰기</span>
                        </DiaryButton>
                    </NavLink>
                    <NavLink to="/writeDiary" style={{ textDecoration: 'none' }}>
                        <DiaryButton>
                            <span>자유주제로<br/> 일기쓰기</span>
                        </DiaryButton>
                    </NavLink>
                </div>
            </Box>
            <Box style={{ height: '400px', fontWeight: '800', fontSize: '16px', flexDirection: 'column' }}>
                <span>오늘 키다의 인기 이야기꾼 </span>
                <div style={{ display: 'flex', flexDirection: 'row', whiteSpace: 'nowrap', margin: '20px' }}>
                    <DiaryButton style={{width: '150px', height: '170px'}}> 
                        TOP1.
                    </DiaryButton>
                    <DiaryButton style={{width: '150px', height: '170px'}}>
                        TOP2.
                    </DiaryButton>
                    <DiaryButton style={{width: '150px', height: '170px'}}>
                        TOP3.
                    </DiaryButton>
                </div>
                <DiaryButton style={{width: '270px', height: '40px', fontWeight: '800', fontSize: '15px'}}>
                    <span>더 많은 이야기 보러 가기</span>
                </DiaryButton>
            </Box>
        </Container>
    );
}

export default HomePage;
