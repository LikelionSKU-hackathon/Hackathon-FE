import { NavLink } from "react-router-dom";
import styled from 'styled-components';

// 모달 스타일 정의
export const ModalContainer = styled.div.attrs((props) => ({
  'data-show': props.show,
}))`
  display: ${(props) => (props.show ? 'flex' : 'none')};
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
  background-image : url(/public/img/BG_Paper.png);
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  max-width: 600px;
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
  background-image: url(src/assets/myPage/icon_close.svg);
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
`;

export const ModalExtra = styled.div`
  width: 290px;
  height: 110px;
  background-image: url(src/assets/myPage/bg_answer.png);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

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

export const CommentContain = styled.div`
  width : 80%;
  border-top : 1px solid rgba(85, 85, 85, 1);

`;

export const MoreButton = styled(NavLink)`
    width: 280px;
    height: 20px;
    margin: 10px;
    padding : 10px;
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