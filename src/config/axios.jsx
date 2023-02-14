import axios from 'axios';
import { getAccessToken, setAccessToken } from '../utils/local-storage';

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

axios.interceptors.request.use(
    config => {
        if(getAccessToken()) {
            const token = getAccessToken()
            console.log(token, '===');
            config.headers.authorization = `Bearer ${getAccessToken()}`
        }
        return config
    }, 
    err => {
        return Promise.reject(err)
    } 
    )

export default axios;
