import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://acnh-react-default-rtdb.firebaseio.com/'
});

export default instance;


