import axios from 'axios';

const api = axios.create({
    baseURL: 'example.com', // ou ip da maquina
});

export default api;
