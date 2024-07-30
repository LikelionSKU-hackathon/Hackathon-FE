import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import BG from "../../assets/BG_Paper.png";
import Close from "../../assets/myPage/icon_close.svg";
import  BG_Answer from "../../assets/myPage/bg_answer.svg";
import { HeartFilled } from "@ant-design/icons";

// 모달 스타일 정의
export const ModalContainer = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: fixed;;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(37, 37, 37, 0.9);
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-image : url(${BG});
  margin: 5% auto;
  padding: 45px 15px 10px 15px;
  border: 1px solid #888;
  width: 88%;
  max-width: 320px;
  height: auto;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  padding : 0;
  border: none;
  top: 5%;
  right: 5%;
  background-image: url(${Close});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ModalImage = styled.img`
  width: 70px;
  height: auto;
  position: absolute;
  top: -35px;
`;

export const ModalDate = styled.h3`
  display: inline-block;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  color : #555;
  margin-right: 5px;
`;
export const ModalDateBold = styled.h3`
display: inline-block;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 700;
  color : #555;
`;
export const ModalTitle = styled.h3`
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 600;
  text-decoration: underline;
  color : #555;
  text-align: center;
  word-wrap: break-word; 
  overflow-wrap: break-word; 
  white-space: pre-wrap; 
`;
export const ModalBodyContain = styled.div`
  width: 290px;
  height: 110px;
  display: block;
  position: relative;
`
export const ModalBody = styled.p`
  width : 100%;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 400;
  color : #555;
  text-align: center;
  padding: 5px;
  white-space: pre-wrap; 
  overflow-wrap: break-word; 
  word-break: break-word; 
  margin-bottom : 10px;
`;

export const ModalExtra = styled.div`
  width: 100%;
  height: 110px;
  /*background-color: rgba(0, 255, 0, 1);*/
  background-image: url(${BG_Answer});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 7px;

  h3{
    color: white;
    font-weight: 700;
    font-size: 9px;
    font-family: Pretendard;
    padding : 0px 0px 0px 10px;
  };
  p{
    color: white;
    font-weight: 300;
    font-size: 9px;
    font-family: Pretendard;
    padding : 0px 0px 0px 10px;
  };
`;

export const Line = styled.div`
  width : 100%;
  height : 1px;
  background: #555555;
  margin: 4px 0 ;
`

export const CommentContain = styled.div`
  width : 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align : center;
  margin : 4px;
  >h3 {
    font-size: 12px;
    font-weight: 600;
    line-height: 16.8px;
    letter-spacing: -0.025em;
    padding : 0;
  }
`;

export const CommentDiv = styled.div`
  position: relative;
  width : 100%;
  height: 70px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const Comment = styled.div`
  width : 90%;
  height : 15px;
  padding: 5px 10px;
  background: #D0DAE880;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.025em;
  text-align: left;
  margin: 5px auto;
  border-radius : 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  >h5 {
    font-weight: 600;
    margin : 0;
  }

  >p {
    font-weight: 400;
    margin-left : 5px;
  }
`;

export const MoreButton = styled(NavLink)`
    width: 88%;
    max-width: 320px;
    height: 20px;
    margin: 10px;
    padding : 10px 15px;
    background: rgb(208, 218, 232);
    border: 1px solid rgba(187, 215, 255, 1);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400; 
    line-height: 16.94px;
    color: rgb(85, 85, 85);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    text-align : center;
`;

export const ModalHeader = styled.div`
  letter-spacing: -0.025em;
  text-align: left;
  color : #FFFFFF;
  transform: translateX(-20%);
  justify-content: flex-start;
  align-items: flex-start;

  > h6 {
    margin : 5px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.64px;
    
  }
  >p {
    font-size: 12px;
    font-weight: 300;
    line-height: 14.32px;
  }
`;

export const ModalLike = styled.div`
  width : 100%;
  height : 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  > div {
    width: 27px;
    height: 27px;
    border: 1px solid #E3E8EF;
    box-shadow: 0px 4px 4px 0px #00000026;
    background: #93BAF3;
    border-radius: 50%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding : 0;
    margin : 0;

    > h6 {
      font-size: 5px;
      font-weight: 600;
      line-height: 7px;
      letter-spacing: -0.025em;
      text-align: center;
      color: #FFF;
      margin: 0;
    }
  }
`;

export const SHeartFilled = styled(HeartFilled)`
  font-size: 10px;
  color : #DD0000;  
`;