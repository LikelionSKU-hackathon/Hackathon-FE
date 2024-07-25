import * as S from "../styles/components/Send";
import React, { useState } from 'react';

export default function Send(props) {
    const [comment, setComment] = useState('');

    // 입력 필드의 값이 변경될 때 호출되는 함수
    const handleInputChange = (e) => {
        setComment(e.target.value); // 상태 업데이트
    };

    // 댓글을 전송하는 함수
    const handleSendComment = async () => {
        if (comment.trim()) {
            // API 호출 코드 예제
        }
    };

    return (
        <S.InputContainer>
            <S.CommetInput
                value={comment}
                onChange={handleInputChange}
                placeholder="나도 한 마디 남기러 가기"
            />
            <S.ArrowButton  /> 
            {/* onClick={handleSendComment} */}
        </S.InputContainer>
    );
}
