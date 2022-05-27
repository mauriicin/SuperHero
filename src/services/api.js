import axios from "axios";

const api = axios.create({
    baseURL: 'https://superheroapi.com/api/'
});

export default api;