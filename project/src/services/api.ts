import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from 'axios';

const BACKEND_URL = 'http://my-json-server.typicode.com/sergiivelikorodnov/lekarna-data/';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401
}

type onUnauthorizedCallback = () => void;

export const createApi = (
  onUnauthorized: onUnauthorizedCallback,
): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }
      return error;
    },
  );

  return api;
};


export const createApiWithoutCallback = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

