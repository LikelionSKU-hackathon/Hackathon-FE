import styled from 'styled-components';

export const WordContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content : center;
    width: 100%;
    height: 30px;
    background-color: ${props => (props.selected ? '#93BAF3' : '#D0DAE8')};
    color: : '#555555';
    margin: 5px 0;
    border-radius: 15px;
    box-shadow:${props => (props.selected ? 'inset 0 4px 4px rgba(0, 0, 0, 0.25)' : '0 4px 4px rgba(0, 0, 0, 0.25)')};
`;
export const FixContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content : center;
    width: 100%;
    height: 30px;
    background-color: #93BAF3;
    color: white;
    margin: 5px 0px;
    padding: 0px 5px;
    border-radius: 15px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
export const WordEmoji = styled.p`
    font-size: 13px;
    font-weight: 500;
    font-family: 'Pretendard', sans-serif;

    white-space: nowrap;
    text-align : left;
    overflow: visible;
    margin-top : 0px;
    margin-bottom : 0px;
    margin-left : 5px;
    margin-right : 0px;
`
export const WordTag = styled.p`
    font-size: 13px;
    font-weight: 500;
    font-family: 'Pretendard', sans-serif;
    
    white-space: nowrap;
    text-align : left;
    overflow: visible;
    margin-top : 0px;
    margin-bottom : 0px;
    margin-left : 5px;
`
export const WordTitle = styled.p`
    font-size: 13px;
    font-weight: 400;
    font-family: 'Pretendard', sans-serif;
    margin-left : 5px;
    margin-top : 0px;
    margin-bottom : 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: 3em;
    text-align : left;
`