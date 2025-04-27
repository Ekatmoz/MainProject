import axios from 'axios';
import store from './store';
import { logout } from './actions/userActions';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Ensure your backend URL is correct
});

// ✅ Add Authorization header to every request
axiosInstance.interceptors.request.use((config) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo && userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`;
  } else {
    console.warn("⚠️ No token found in localStorage!");
  }

  return config;
}, (error) => Promise.reject(error));

// ✅ Handle 401 Unauthorized (Token Expired)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ Axios Error:", error.response);

    if (error.response && error.response.status === 401) {
      console.warn("⚠️ Token expired! Logging out...");
      
      // ✅ Clear localStorage and dispatch logout action
      localStorage.removeItem('userInfo');
      store.dispatch(logout());

      // ✅ Reload page to ensure axiosInstance has the latest state
      window.location.reload();
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
