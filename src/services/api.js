import axios from 'axios';

const accessToken = '5300109980051940';

const headers = {
  'Content-Type': 'application/json',
};

// Há redirecionamentos para o api.php e por isso já colocamos direto no código (economiza requests no servidor)
const api = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${accessToken}`,
  headers,
});

export default api;
