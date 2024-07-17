import styled from 'styled-components';
export const WordContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content : center;
    width: 300px;
    height: 30px;
    background-color: ${props => (props.selected ? '#93BAF3' : '#D0DAE8')};
    color: ${props => (props.onProfile ? 'white' : '#555555')};
    margin: 10px 0;
    padding : 0 24px;
    border-radius: 15px;
    box-shadow:${props => (props.selected ? 'inset 0 4px 4px rgba(0, 0, 0, 0.25)' : '0 4px 4px rgba(0, 0, 0, 0.25)')};
`;
export const WordTag = styled.p`
    font-size: 13px;
    font-weight: 600;
    font-family: 'Pretendard', sans-serif;
    margin-left : 3px;
    white-space: nowrap;
    text-align : center;
    overflow: visible;
    margin-top : 0px;
    margin-bottom : 0px;
`
export const WordTitle = styled.p`
    font-size: 13px;
    font-weight: 400;
    font-family: 'Pretendard', sans-serif;
    margin-left : 10px;
    margin-top : 0px;
    margin-bottom : 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: 3em;
    text-align : center;
`