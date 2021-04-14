import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://api-lukutex.herokuapp.com/',
    baseURL: 'http://localhost:4000/',
    // baseURL: 'https://api-lukutex-test.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export default instance;
