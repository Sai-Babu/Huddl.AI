import axios from "axios";

export const getComments = () => {
    return axios.get('/comments');
}