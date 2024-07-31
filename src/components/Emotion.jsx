import React, { useState } from "react";
import * as S from "../styles/components/Emotion";
import emotion1 from "../assets/Emotion/1.svg";
import emotion2 from "../assets/Emotion/2.svg";
import emotion3 from "../assets/Emotion/3.svg";
import emotion4 from "../assets/Emotion/4.svg";
import emotion5 from "../assets/Emotion/5.svg";
import emotion6 from "../assets/Emotion/6.svg";

const Emotion = ({ onSelect }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isSelecting, setIsSelecting] = useState(false);
    const images = [emotion1, emotion2, emotion3, emotion4, emotion5, emotion6];
    const moodIds = [1, 2, 3, 4, 5, 6]; 
    const labels = ["화나요", "슬퍼요", "그저그래요", "행복해요", "기뻐요", "속상해요"];

    const handleImageClick = (image, moodId) => {
        setSelectedImage(image);
        setIsSelecting(false);
        onSelect(moodId); 
    };

    const handleButtonClick = () => {
        setIsSelecting(true);
    };

    return (
        <div>
            <S.EmotionButton
                onClick={handleButtonClick}
                bgImage={selectedImage}
                hasSelectedImage={!!selectedImage}
            />
            {isSelecting && (
                <S.EmotionSelectionContainer>
                    {images.map((image, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <S.EmotionOption
                                src={image}
                                onClick={() => handleImageClick(image, moodIds[index])}
                                className={selectedImage === image ? 'selected' : ''}
                            />
                            <S.EmotionOptionLabel>{labels[index]}</S.EmotionOptionLabel>
                        </div>
                    ))}
                </S.EmotionSelectionContainer>
            )}
        </div>
    );
};

export default Emotion;
