import axios from "axios";

const instance = axios.create({
    baseURL: 'https://sub.skuhackathon.shop',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
    }
})

export default instance;