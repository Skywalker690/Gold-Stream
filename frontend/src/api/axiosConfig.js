// src/api/axios.js
import axios from 'axios';

export default axios.create({
    baseURL: 'https://1fd9fade2108.ngrok-free.app/', // Updated baseURL
    headers: { "ngrok-skip-browser-warning": "true" }
});