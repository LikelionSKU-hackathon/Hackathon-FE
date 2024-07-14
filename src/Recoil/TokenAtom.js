// npm i recoil
import { atom, selector } from 'recoil'
export const tokenState = atom({
    key: 'tokenState',
    default: undefined
})
export const isLoginSelector = selector({
    key: 'isLoginSelector',
    get: ({ get }) => {
        const token = get(tokenState)
        return !!token
    }
})