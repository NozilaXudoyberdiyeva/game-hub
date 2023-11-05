import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});
