import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://airdrop-api.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export default instance;
