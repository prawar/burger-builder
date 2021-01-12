import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-1e5e2-default-rtdb.firebaseio.com/'
});

export default instance;