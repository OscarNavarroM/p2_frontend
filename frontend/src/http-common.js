import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:30900/api',
    headers: {
        'Content-Type': 'application/json'
    } 
})