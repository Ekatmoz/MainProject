import axios from '../../axiosInstance';
import { setError, setShippingAddress, setPaymentMethod, clearOrder } from '../slices/order';

export const setAddress = (data) => (dispatch) => {
	dispatch(setShippingAddress(data));
};

export const setPaymentMethodAction = (paymentMethod) => (dispatch) => {
  dispatch(setPaymentMethod(paymentMethod));
};

export const setPayment = (paymentMethod) => async (dispatch, getState) => {
	const {
		cart: { cartItems, subtotal, shipping },
		order: { shippingAddress },
		user: { userInfo },
	} = getState();

	const newOrder = { subtotal, shipping, shippingAddress, cartItems, userInfo, paymentMethod };

	try {
		const config = { headers: { Authorization: `Bearer ${userInfo.token}`, 'Content-Type': 'application/json' } };

		const { data } = await axios.post('api/checkout', newOrder, config);
		
		// Redirect based on payment method
		if (paymentMethod === 'cash') {
			window.location.assign('/success');
	} else {
			window.location.assign(data.url); // Assuming Stripe URL is returned here
	}
	
	} catch (error) {
		setError(
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
				? error.message
				: 'An expected error has occured. Please try again later.'
		);
	}
};

export const resetOrder = () => async (dispatch) => {
	dispatch(clearOrder());
};