import axios, { AxiosError } from "axios";

const apiCient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});

export default apiCient;
export { AxiosError as CanceledError };
