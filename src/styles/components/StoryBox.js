import styled from "styled-components";

export const StoryBox = styled.div`
  width: 290px;
  height: 100px;
  border-radius: 5px;
  border: 2px solid rgba(208, 218, 232, 1);
  background: rgba(255, 255, 255, 1);
  padding : 10px;
  align-items : center;
  text-align : left;

  >h5 {
    font-size: 11px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: -0.025em;
    padding-right : 5px;
    display: inline;
    margin : 0;

    &.title {
      font-weight : 400;
    }
  }

  >p {
    margin: 0;
    font-size: 9px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.3px;
    overflow: hidden; /* 넘치는 부분을 숨깁니다 */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 표시할 줄의 수 */
    -webkit-box-orient: vertical; /* 박스의 방향을 수직으로 설정합니다 */
    text-overflow: ellipsis; /* 넘칠 때 ...으로 표시합니다 */
    
  }
`;

export const StoryDiv = styled.div`
  padding : 0;
  margin : 0;
  flex-direction : row;
`;

export const ProfileBox = styled.div`
  margintop -: 0;
  width: 195px;
  height: 30px;
  border-radius: 30px;
  padding : 5px;
  background : rgba(0,0,0,0.5);
  flex-direction : row;
  display : flex;

  >img {
    width : 30px;
    height : 30px;
    border-radius : 50%;
    object-fit : cover;
  }
`;

export const TextDiv = styled.div`
  height : 20px;
  margin-left : 10px;
  text-align: left;
  flex-direction : column;
  color : #FFFFFF;
  margin-right : 5px;

  >h6 {
    margin : 5px 0px;
    padding : 0;
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: -0.025em;
  }

  >p {
    padding : 0;
    margin: 0;
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.025em;
  }
`;

export const CircleButton = styled.button`
  width : 35px;
  height : 35px;
  margin : 0 5px;
`;