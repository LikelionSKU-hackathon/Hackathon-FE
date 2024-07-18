import * as S from "../styles/components/WordLine"
export default function FixLine(props){
    return(
        <S.FixContainer selected = {props.selected} onProfile = {props.onProfile}>
            <S.WordEmoji>{props.emoji}</S.WordEmoji>
            <S.WordTag>{props.tag}</S.WordTag>
            <S.WordTitle>{props.title}</S.WordTitle>
        </S.FixContainer>
    );
}