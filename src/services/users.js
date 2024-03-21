import axios from "axios";

export const findUserByIdService = (userId) => {
    const baseUrl = 'http://localhost:8081';
    return axios.get(`${baseUrl}/users/findById/${userId}`);
}