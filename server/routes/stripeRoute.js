import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import Stripe from 'stripe';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripeRoute = express.Router();

// Endpoint to handle Stripe Checkout Session creation
const stripePayment = async (req, res) => {
    const data = req.body;
    console.log(req.body)

    let lineItems = [];

    if (data.shipping == 1290) {
        lineItems.push({
            price: process.env.STANDARD_SHIPPING_ID,
            quantity: 1,
        });
    } else {
        lineItems.push({
            price: process.env.PICKUP_SHIPPING_ID,
            quantity: 1,
        });
    }

    data.cartItems.forEach((item) => {
        lineItems.push({
            price: item.stripeId,
            quantity: item.qty,
        });
    });

    try {
        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: 'http://localhost:3000/cancel',
        });

        // Create and save the order in your database
        const order = new Order({
            orderItems: data.cartItems,
            user: data.userInfo._id,
            username: data.userInfo.name,
            email: data.userInfo.email,
            shippingAddress: data.shippingAddress,
            shippingPrice: data.shipping,
            subtotal: data.subtotal,
            totalPrice: Number(data.subtotal + data.shipping),
            paymentMethod: data.paymentMethod,
            paymentStatus: 'pending', // Set initial status as 'pending'
            canceled: false, // Initialize as not canceled
            checkoutSessionId: session.id // Store the Stripe checkout session ID
        });

        const newOrder = await order.save();

        data.cartItems.forEach(async (cartItem) => {
            let product = await Product.findById(cartItem.id);
            product.stock = product.stock - cartItem.qty;
            await product.save(); // Ensure to await product save
        });

        res.send(
            JSON.stringify({
                orderId: newOrder._id.toString(),
                url: session.url,
            })
        );
    } catch (error) {
        console.error('Error creating checkout session:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

// Endpoint to handle Stripe Webhook Events
const handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook Error:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;
                await Order.findOneAndUpdate(
                    { checkoutSessionId: session.id },
                    { paymentStatus: 'completed', paymentIntentId: session.payment_intent }
                );
                break;

            case 'payment_intent.succeeded':
                const paymentIntent = event.data.object;
                await Order.findOneAndUpdate(
                    { paymentIntentId: paymentIntent.id },
                    { paymentStatus: 'completed' }
                );
                break;

            case 'payment_intent.payment_failed':
                const failedPaymentIntent = event.data.object;
                await Order.findOneAndUpdate(
                    { paymentIntentId: failedPaymentIntent.id },
                    { paymentStatus: 'failed' }
                );
                break;

            case 'checkout.session.expired':
                const expiredSession = event.data.object;
                await Order.findOneAndUpdate(
                    { checkoutSessionId: expiredSession.id },
                    { canceled: true }
                );
                break;

            // Add other relevant event types as needed

            default:
                console.warn(`Unhandled event type ${event.type}`);
        }
    } catch (error) {
        console.error('Error handling webhook event:', error.message);
        return res.status(500).send('Internal Server Error');
    }

    res.json({ received: true });
};

// Define routes
stripeRoute.route('/').post(protectRoute, stripePayment);
stripeRoute.route('/webhook').post(express.raw({ type: 'application/json' }), handleStripeWebhook);

export default stripeRoute;
