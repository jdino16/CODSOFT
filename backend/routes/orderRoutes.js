const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/', authMiddleware, async (req, res) => {
  const { items, totalAmount, shippingAddress } = req.body;
  const userId = req.userId;

  try {
    const newOrder = new Order({ user: userId, items, totalAmount, shippingAddress });
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(400).json({ message: 'Error placing order', error });
  }
});

module.exports = router;
