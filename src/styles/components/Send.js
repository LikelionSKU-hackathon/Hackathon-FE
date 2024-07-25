import styled from 'styled-components';

export const CommetInput = styled.input`
    margin-top : 10px;
    width : 100%;
    background: #82828280;
    height : 20px;
    padding : 5px 10px;
    box-shadow: 0px 4px 4px 0px #00000040 inset;
    border-radius : 20px;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.025em;
    text-align: left;
    border : none;
    color : #FFFFFF;
  `;
  
  export const ArrowButton = styled.div`
    width : 20px;
    height : 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%) translateY(5px);
    border: none;
    cursor: pointer;
    background-image: url(src/assets/ETC/arrowUp.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
  `;

  export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin : 0;
`;