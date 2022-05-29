import axios from 'axios';

const acessToken = '5300109980051940';
const headers = {
    "Content-Type": "application/json",
    Authorization: acessToken,
  };

export const api = axios.create({
	baseURL: `https://superheroapi.com/api/${acessToken}`,
});

export const findById = async (id) => {
	return api.get(`/${id}`, headers);
};

export const findByName = async (name) => {
	return api.get(`/search/${name}`, headers);
};