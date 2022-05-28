import axios from 'axios';

const acessToken = '5300109980051940';

export const api = axios.create({
	baseURL: `https://superheroapi.com/api/${acessToken}`,
});
