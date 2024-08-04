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

export const getLikeStatus = async (diaryId, token) => {
    try {
        const response = await axios.get(`/diary/${diaryId}/iLiked`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;  // true 또는 false 반환
    } catch (error) {
        console.error('좋아요 가져오기 에러 :', error.response?.data || error.message);
        throw error;
    }
};

export const getDiaryComments = async (diaryId, token) => {
    try {
        const response = await axios.get(`/diary/${diaryId}/comments`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('댓글 가져오기 에러 : ', error);
        throw error
    }
};

export const sendComment = async (diaryId, content, memberId, token) => {
    try {
        const response = await axios.post(`/diary/${diaryId}/comments`, {
            content,
            diaryId,
            memberId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('댓글 작성 : ', response.data);
        return response.data;
    } catch (error) {
        console.error('댓글 작성 에러 : ', error);
        throw error;
    }
};
