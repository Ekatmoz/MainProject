import express from 'express';
import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';
import { admin, protectRoute } from '../middleware/authMiddleware.js';

const orderRoutes = express.Router();


const getOrders = async (req, res) => {
	const orders = await Order.find({});
	res.json(orders);
};
// Delete an order
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (order) {
        res.json(order);
    } else {
        res.status(404).send('Order not found.');
        throw new Error('Order not found.');
    }
});

// Mark an order as delivered
const setDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isDelivered = true;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).send('Order could not be updated.');
        throw new Error('Order could not be updated.');
    }
});

// Update payment method
const setPaymentMethod = asyncHandler(async (req, res) => {
    const { paymentMethod } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
        order.paymentMethod = paymentMethod;
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).send('Order could not be updated.');
        throw new Error('Order could not be updated.');
    }
});

// Add an endpoint to update paymentStatus manually
const updatePaymentStatus = asyncHandler(async (req, res) => {
    const { paymentStatus } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
        order.paymentStatus = paymentStatus;  // Update paymentStatus
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).send('Order could not be updated.');
        throw new Error('Order could not be updated.');
    }
});

// Add an endpoint to cancel an order manually
const cancelOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.canceled = true;  // Mark the order as canceled
        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } else {
        res.status(404).send('Order could not be updated.');
        throw new Error('Order could not be updated.');
    }
});

// Define routes
orderRoutes.route('/:id').delete(protectRoute, admin, deleteOrder);
orderRoutes.route('/:id').put(protectRoute, admin, setDelivered);
orderRoutes.route('/:id/payment').put(protectRoute, setPaymentMethod);

// New endpoints for payment status and canceling orders
orderRoutes.route('/:id/payment-status').put(protectRoute, admin, updatePaymentStatus);
orderRoutes.route('/:id/cancel').put(protectRoute, admin, cancelOrder);

// Fetch all orders
orderRoutes.route('/').get(protectRoute, admin, getOrders);

export default orderRoutes;
