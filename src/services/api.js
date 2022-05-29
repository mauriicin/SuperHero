import axios from 'axios';

const acessToken = '5300109980051940';

export const api = axios.create({
	baseURL: `https://superheroapi.com/api/${acessToken}`,
});

export const findById = async (id) => {
	return api.get(`/search/${id}`, 
	{
		headers: {                  
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Authorization", 
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
			"Content-Type": "application/json;charset=UTF-8"                   
		},
	}
	);
};
