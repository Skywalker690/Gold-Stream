// src/api/axios.js
import axios from 'axios';

export default axios.create({
    baseURL: 'https://5faa330c3bd0.ngrok-free.app/api/v1', // Updated baseURL
    headers: { "ngrok-skip-browser-warning": "true" }
});
