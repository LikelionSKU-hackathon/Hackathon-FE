import axios from './axios'; // 경로를 맞춰주세요

export const getWriteDiary = async (diaryId, token) => {
    try {
        const response = await axios.get(`/diary/${diaryId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('내가 쓴 일기 가져오기 error:', error);
        return null;
    }
};
