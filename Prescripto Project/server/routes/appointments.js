const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// Placeholder for JWT middleware
// const authenticateToken = require('../middleware/auth');

// Razorpay instance (replace with your actual Razorpay key and secret)
// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// Get all appointments (admin only)
router.get('/', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.role !== 'admin') return res.sendStatus(403);
        const appointments = await Appointment.find().populate('user doctor');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get appointments by user
router.get('/user/:userId', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.id !== req.params.userId) return res.sendStatus(403);
        const appointments = await Appointment.find({ user: req.params.userId }).populate('doctor');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Book appointment
router.post('/', /*authenticateToken,*/ async (req, res) => {
    try {
        console.log('Book appointment request body:', req.body);
        const { user, doctor, date, time } = req.body;
        const appointment = new Appointment({ user, doctor, date, time });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (err) {
        console.error('Book appointment error:', err);
        res.status(500).json({ message: err.message });
    }
});

// Create Razorpay order
// router.post('/payments/create-order', async (req, res) => {
//     try {
//         const { amount, currency } = req.body;
//         const options = {
//             amount: amount * 100, // amount in paise
//             currency: currency || 'INR',
//             receipt: `receipt_order_${Date.now()}`,
//         };
//         const order = await razorpay.orders.create(options);
//         res.json({ orderId: order.id, key_id: process.env.RAZORPAY_KEY_ID });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// Create Stripe Payment Intent
router.post('/payments/create-payment-intent', async (req, res) => {
    try {
        const { amount, currency } = req.body;
        console.log('Creating payment intent:', { amount, currency, keyLoaded: !!process.env.STRIPE_SECRET_KEY });
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // amount in paise/cents
            currency: currency || 'INR',
            automatic_payment_methods: { enabled: true },
        });
        res.json({ clientSecret: paymentIntent.client_secret, publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
    } catch (err) {
        console.error('Stripe error:', err, err?.raw);
        res.status(500).json({ message: err.message, raw: err?.raw });
    }
});

// Update appointment status (admin/user)
router.put('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(appointment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Cancel appointment
router.delete('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment cancelled' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 