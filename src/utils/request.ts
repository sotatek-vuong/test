import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

axiosInstance.interceptors.request.use(undefined, (err) => {
  console.error(err);

  return err;
});

export default axiosInstance;
