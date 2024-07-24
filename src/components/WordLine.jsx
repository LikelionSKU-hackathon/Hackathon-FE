import * as S from "../styles/components/WordLine"
export default function WordLine({ id, emoji, tag, title, selected,onProfile, onClick }) {
    const handleClick = () => {
        onClick(id);
    };
    return (
        <S.WordContainer
            selected={selected}
            onProfile={onProfile}
            onClick={handleClick}>
            {emoji}
            <S.WordTag>{tag}</S.WordTag>
            <S.WordTitle>{title}</S.WordTitle>
        </S.WordContainer>
    );
}