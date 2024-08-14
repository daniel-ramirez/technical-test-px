import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:7000'
});

export default apiClient;