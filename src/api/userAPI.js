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
        console.error('사용자 데이터 가져오기 에러', error);
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
        return null;
    }
}

export const getPreInfo = async (memberId, token) => {
    try {
        const response = await axios.get(`/diary/pre-info/${memberId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Pre-info data 가져오기 에러:', error);
        return null;
    }
};