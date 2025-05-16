import axios from 'axios';

const api = axios.create({
  baseURL: 'https://testjob.checkport.ru',
});

export default api;
