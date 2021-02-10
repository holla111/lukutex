import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lukutex-api-test.herokuapp.com/lunar-game/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

export default instance;