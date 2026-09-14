import axios from 'axios';

const api = axios.create({
    baseURL: '/api',  // ← en vez de http://localhost:8080/api
    headers: { 'Content-Type': 'application/json' },
});

// Interceptor: agrega el token JWT a cada request automáticamente
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor: si el token expiró (401), limpia y redirige al login
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;