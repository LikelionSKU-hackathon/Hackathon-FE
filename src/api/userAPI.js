import axios from "./axios";

export const getUserData = async(token) =>{ 
    try {
        const response = await axios.get('/members', {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${jwtToken}`  // JWT 토큰 설정
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error user data', error);
        throw error;
    }
};


export const getAIQuestionData = async(token) => {
    try {
        const response = await axios.get('/diary/question', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('AI질문 에러', error)
    }
}