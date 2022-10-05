import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-application-8804-default-rtdb.firebaseio.com/'
});

export default instance;