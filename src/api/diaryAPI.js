import axios from './axios';

export const getWriteDiary = async (diaryId, token) => {
    try {
        const response = await axios.get(`/diary/${diaryId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        console.log("other diary modal diary data : ", response.data);
        return response.data;
    } catch (error) {
        console.error('일기 가져오기 error:', error);
        return null;
    }
};

export const getDiaryList = async () => {
    try {
        const response = await axios.get('diary/diaryList');
        console.log('다이어리 리스트: ',response.data);
        return response.data;
        
    } catch(error) {
        console.log('다이어리 리스트 불러오기 에러: ', error);
        return null;
    }
};

export const getPopularDiary = async () => {
    try {
        const response = await axios.get('diary/popular');
        console.log('getPopularDiary: ', response);
        return response.data;
    } catch (error) {
        console.error('좋아요 많은 다이어리 가져오기 error: ', error);
        return null;
    }
};
