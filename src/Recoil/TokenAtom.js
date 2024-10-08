// npm i recoil
import { atom, selector } from 'recoil'
export const tokenState = atom({
    key: 'tokenState',
    default: undefined,
})
export const ProfileState = atom({
    key: 'profile',
    default: {
        id: '',
        nickname: '',
        age: 0,
        selectedOptions: [],
        profilePicture: '', // 프로필 사진 URL 또는 base64 데이터
    }
})
export const isLoginSelector = selector({
    key: 'isLoginSelector',
    get: ({ get }) => {
        const token = get(tokenState)
        return !!token
    }
})