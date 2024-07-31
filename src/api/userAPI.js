import axios from "./axios";

export const getUserData = async(token) =>{ 
    try {
        const response = await axios.get('/members/', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error user data', error);
        return {};
    }
};


export const getAIQuestionData = async(token) => {
    try {
        const response = await axios.get('/ai/question', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('AI 질문 데이터 가져오기 에러:', error);
        if (error.response) {
            console.error('Response error:', error.response.data);
        } else if (error.request) {
            console.error('Request error:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        return null;
    }
}