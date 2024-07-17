import * as S from "../styles/components/WordLine"
export default function WordLine(props){
    return(
        <S.WordContainer selected = {props.selected} onProfile = {props.onProfile}>
            {props.emoji}
            <S.WordTag>{props.tag}</S.WordTag>
            <S.WordTitle>{props.title}</S.WordTitle>
        </S.WordContainer>
    );
}