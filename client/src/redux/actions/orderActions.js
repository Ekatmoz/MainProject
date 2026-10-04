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
		// #region agent log
		fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',hypothesisId:'B',location:'orderActions.js:setPayment',message:'posting checkout',data:{paymentMethod,hasToken:Boolean(userInfo?.token),itemCount:cartItems?.length||0,shipping},timestamp:Date.now()})}).catch(()=>{});
		// #endregion

		const { data } = await axios.post('api/checkout', newOrder, config);
		// #region agent log
		fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',hypothesisId:'C',location:'orderActions.js:setPayment:response',message:'checkout response',data:{dataType:typeof data,hasUrl:Boolean(data&&data.url),paymentMethod},timestamp:Date.now()})}).catch(()=>{});
		// #endregion
		
		// Redirect based on payment method
		if (paymentMethod === 'cash') {
			window.location.assign('/success');
	} else {
			window.location.assign(data.url); // Assuming Stripe URL is returned here
	}
	
	} catch (error) {
		// #region agent log
		fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',hypothesisId:'B',location:'orderActions.js:setPayment:catch',message:'checkout failed',data:{status:error?.response?.status||null,message:error?.message||String(error)},timestamp:Date.now()})}).catch(()=>{});
		// #endregion
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