import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
    withCredentials: true,
    timeout: 10000, // 10 second timeout
});

export default axiosClient;