import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",    
  },
  withCredentials: false,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Use auth tokens or other request modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here
    return Promise.reject(error);
  }
);

export default api;
