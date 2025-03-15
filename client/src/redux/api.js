import axios from 'axios';
import { store } from './store'; // Import Redux store
import { userLogout } from ';;/////./slices/user';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api',  // Adjust base URL if needed
    headers: { 'Content-Type': 'application/json' }
});

// Auto-logout when token expires
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            alert('Session expired. Please log in again.');
            localStorage.removeItem('userInfo');  // Remove token
            store.dispatch(userLogout());  // Dispatch logout action
            window.location.href = '/login';  // Redirect to login
        }
        return Promise.reject(error);
    }
);

export default api;
