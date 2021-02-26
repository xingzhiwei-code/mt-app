import axios from "axios";

axios.defaults.baseURL = 'http://api.duyiedu.com';
axios.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appkey: 'xzw__1596454330358',
    }
    return config;
}, function (error) { 
    return Promise.reject(error);
})


export default axios;