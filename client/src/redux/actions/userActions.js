import axios from 'axios';
import {
  setUserOrders,
  setError,
  setLoading,
  setServerResponseStatus,
  setServerResponseMsg,
  userLogin,
  userLogout,
  verificationEmail,
  stateReset,
  setUpdateSuccess,
  resetUpdateSuccess as resetUpdateSuccessAction,
} from '../slices/user';

import { clearCart } from '../slices/cart';

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };

    const { data } = await axios.post('api/users/login', { email, password }, config);

    dispatch(userLogin(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An expected error has occured. Please try again later.'
      )
    );
  }
};

export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT
    return decoded.exp * 1000 < Date.now(); // Compare expiration time with current time
  } catch (error) {
    return true; // If decoding fails, treat the token as expired
  }
};

export const logout = () => (dispatch) => {
  // ✅ Save cart items before logout
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  localStorage.removeItem('userInfo');
  // ✅ Restore cart items back after removing user info
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  dispatch(clearCart());
  dispatch(userLogout());
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };

    const { data } = await axios.post('api/users/register', { name, email, password }, config);

    dispatch(userLogin(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An expected error has occured. Please try again later.'
      )
    );
  }
};

export const verifyEmail = (token) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const config = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } };

    await axios.get(`/api/users/verify-email`, config);

    dispatch(verificationEmail());
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      userInfo.active = true;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.message === 'Token expired') {
      dispatch(logout());
    } else {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : 'An expected error has occured. Please try again later.'
        )
      );
    }
  }
};

export const sendResetEmail = (email) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };

    const { data, status } = await axios.post(`/api/users/password-reset-request`, { email }, config);

    dispatch(setServerResponseMsg(data));
    dispatch(setServerResponseStatus(status));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An expected error has occured. Please try again later.'
      )
    );
  }
};

export const resetPassword = (password, token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } };

    const { data, status } = await axios.post(`/api/users/password-reset`, { password }, config);
    console.log(data, status);
    dispatch(setServerResponseMsg(data, status));
    dispatch(setServerResponseStatus(status));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An expected error has occured. Please try again later.'
      )
    );
  }
};

export const resetState = () => async (dispatch) => {
  dispatch(stateReset());
};

export const googleLogin = (googleId, email, name, googleImage) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };

    const { data } = await axios.post('/api/users/google-login', { googleId, email, name, googleImage }, config);
    dispatch(userLogin(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An expected error has occured. Please try again later.'
      )
    );
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch(setLoading(true));

  const {
    user: { userInfo },
  } = getState();

  if (!userInfo || isTokenExpired(userInfo.token)) {
    dispatch(logout());
    return;
  }

  try {
    const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };

    const { data } = await axios.get(`/api/users/${userInfo._id}`, config);
    dispatch(setUserOrders(data));
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.message === 'Token expired') {
      dispatch(logout());
    } else {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : 'An expected error has occured. Please try again later.'
        )
      );
    }
  }
};

export const updateProfile = (id, name, email, password) => async (dispatch, getState) => {
  dispatch(setLoading(true));

  const {
    user: { userInfo },
  } = getState();

  if (!userInfo) {
    dispatch(logout());
    return;
  }

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, { id, name, email, password }, config);

    dispatch(userLogin(data)); // Update user info in Redux
    localStorage.setItem('userInfo', JSON.stringify(data)); // Update localStorage

    dispatch(setServerResponseMsg('Profile updated successfully.'));
    dispatch(setServerResponseStatus(200));
    dispatch(setUpdateSuccess());
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error occurred. Please try again later.'
      )
    );
  }
};

// Reset update success state
export const clearUpdateSuccessFlag = () => (dispatch) => {
  dispatch(resetUpdateSuccessAction());
};
