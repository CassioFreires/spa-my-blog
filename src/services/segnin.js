import axios from "axios";

export const authService = (data) => {
    const baseUrl = `http://localhost:8081`;
    return axios.post(`${baseUrl}/auth/login`, data);
}