import axios from 'axios';

const acessToken = '5300109980051940';

export const api = axios.create({
	baseURL: `https://superheroapi.com/api/${acessToken}`,
});

export const findById = async (id) => {
	return api.get(`/${id}`);
};
