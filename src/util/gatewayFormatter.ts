import {AxiosError, AxiosResponse} from 'axios';

export const errorFormatter = (error: AxiosError) => {
  if (error && error.response && error.response.data && error.response.data.error) {
    // @ts-ignore
    const response = { config: error.config, ...error.response, ...error.response.data };
    // delete enum to avoid confusion
    delete response.data;
    return response;
  }
  return error;
};

export const responseFormatter = (response: AxiosResponse) => {
  if (response && response.data && typeof response.data.data !== 'undefined') {
    return { ...response, ...response.data };
  }
  return response;
};
