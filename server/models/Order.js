import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		username: {
			type: String,
			required: true,
			ref: 'User',
		},
		email: {
			type: String,
			required: true,
			ref: 'User',
		},
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
				id: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Product',
				},
			},
		],
		shippingAddress: {
			receiver: { type: String, required: true },
			surname: { type: String, required: true },
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: String, required: true },
			country: { type: String, required: true },
		},
		shippingPrice: { type: Number, default: 0.0 },
		totalPrice: { type: Number, default: 0.0 },
		subtotal: { type: Number, default: 0.0 },
		isDelivered: { type: Boolean, required: true, default: false },
		paymentMethod: { type: String, required: true },
		isPaid: { type: Boolean, required: true, default: false },
		paidAt: { type: Date },
		deliveredAt: { type: Date },
		paymentStatus: {  // New field for payment status
			type: String,
			enum: ['pending', 'completed', 'failed', 'refunded'],  // Define possible statuses
			default: 'pending'
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;