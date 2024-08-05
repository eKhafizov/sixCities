import axios, { AxiosInstance } from 'axios';


const createApi = () : AxiosInstance => {
  const api = axios.create({
    url: 'https://13.react.htmlacademy.pro/six-cities',
    timeout: 3000
  });

  //api.interceptors.request

  //api.interceptors.response
  return api;
};

export default createApi;
