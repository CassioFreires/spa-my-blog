import axios from "axios";

export const signupService = (data) => {
    delete data.confirmPassword;

    const baseUrl = `http://localhost:8081`;
    return axios.post(`${baseUrl}/users/register`, data)
}