import axios from "axios";

export const findAllService = () => {
    const baseUrl = `http://localhost:8081`;
    return axios.get(`${baseUrl}/posts/findAll`);
  

}