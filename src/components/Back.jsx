import * as S from "../styles/components/Back";
import { useNavigate } from "react-router-dom";
export default function Back(props){
    const navigate = useNavigate();
    return (
        <S.btnContainer onClick={() => navigate(props.to)}>
        </S.btnContainer>
    );
}