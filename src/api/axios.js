import axios from "axios";

const instance = axios.create({
    baseURL: 'https://sub.skuhackathon.shop',
    timeout: 1000,
    params: {
        language : "ko-KR",
    },
    headers: {

    }
})

export default instance;