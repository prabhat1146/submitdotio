import axios from "axios";

const API_HOST = process.env.REACT_APP_SERVER_HOST || "http://localhost:5000";

const api = axios.create({
  baseURL: API_HOST,
  headers: { "Content-Type": "application/json" },
  timeout: 10000, // 10 seconds
});

// 🔑 Request interceptor
api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("authToken");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔑 Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

// Utility functions
const postJson = (url, data) => api.post(url, data);
const postForm = (url, formData) =>
  api.post(url, formData, { headers: { "Content-Type": "multipart/form-data" } });
const get = (url, params) => api.get(url, { params });
const put = (url, data) => api.put(url, data);
const patch = (url, data) => api.patch(url, data);
const del = (url) => api.delete(url);

const ApiClient = { get, postJson, postForm, put, patch, del };

export default ApiClient;
