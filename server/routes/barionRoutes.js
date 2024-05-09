import express from 'express';
import Barion from 'node-barion';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const barion = new Barion({
  POSKey: process.env.BARION_POS_KEY,
  Environment: 'Test', // Change to 'Production' for live environment
});

const barionRoute = express.Router();

const EXPRESS_SHIPPING_PRICE = 1990; // Set the express shipping price
const PICKUP_SHIPPING_PRICE = 0; // Set the pickup shipping price

const barionPayment = async (req, res) => {
  const data = req.body;

  let lineItems = [];

  let shippingPrice = PICKUP_SHIPPING_PRICE; // Default to pickup shipping

  if (data.shipping == 1990) {
    lineItems.push({
      Name: 'Express Shipping',
      Description: 'Express Shipping Description',
      Quantity: 1,
      Unit: 'Piece',
      UnitPrice: EXPRESS_SHIPPING_PRICE,
    });
    shippingPrice = EXPRESS_SHIPPING_PRICE; // Update shipping price if express shipping selected
  }

  data.cartItems.forEach((item) => {
    lineItems.push({
      Name: item.name,
      Description: item.description,
      Quantity: item.qty,
      Unit: 'Piece',
      UnitPrice: item.price,
    });
  });

  try {
    // Create payment request
    const paymentRequest = {
      PaymentType: 'Immediate',
      GuestCheckOut: true,
      FundingSources: ['All'],
      PaymentRequestId: 'uniquePaymentRequestId',
      Transactions: [
        {
          POSTransactionId: 'uniqueTransactionId',
          Payee: 'info@sushibarhungary.hu',
          Total: data.subtotal + shippingPrice, // Use the total including shipping price
          Items: lineItems,
        },
      ],
      RedirectUrl: 'http://localhost:3000/success',
      CallbackUrl: 'http://localhost:3000/barion/payment/callback',
    };

    // Create payment session with Barion
    const paymentSession = await barion.createPayment(paymentRequest);

    // Create new order
    const order = new Order({
      orderItems: data.cartItems,
      user: data.userInfo._id,
      username: data.userInfo.name,
      email: data.userInfo.email,
      shippingAddress: data.shippingAddress,
      shippingPrice: shippingPrice, // Set shipping price
      subtotal: data.subtotal,
      totalPrice: data.subtotal + shippingPrice, // Update total price
    });

    // Save order to database
    const newOrder = await order.save();

    // Update product stock
    data.cartItems.forEach(async (cartItem) => {
      const product = await Product.findById(cartItem.id);
      product.stock = product.stock - cartItem.qty;
      await product.save();
    });

    // Send response with payment session URL and order ID
    res.json({
      orderId: newOrder._id.toString(),
      url: paymentSession.GatewayUrl,
    });
  } catch (error) {
    console.error('Error creating Barion payment:', error);
    res.status(500).json({ error: 'Error creating Barion payment' });
  }
};

barionRoute.route('/').post(protectRoute, barionPayment);

export default barionRoute;

