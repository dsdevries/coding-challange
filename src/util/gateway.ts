import axios from 'axios';
import { responseFormatter, errorFormatter } from './gatewayFormatter';

const gateway = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        Accept: 'application/json',
    },
    responseType: 'json',
});

gateway.interceptors.response.use(
    response => responseFormatter(response),
    error => {
        throw errorFormatter(error);
    },
);

export default gateway;