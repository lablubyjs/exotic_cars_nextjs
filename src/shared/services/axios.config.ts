import axios, {AxiosError} from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(
    async (response) => {
        return response.data;
    },

    function (error: AxiosError) {
        return Promise.reject(error);
    }
);

export default instance;
