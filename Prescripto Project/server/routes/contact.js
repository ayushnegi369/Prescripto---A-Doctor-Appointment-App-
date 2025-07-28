const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// Submit contact form
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contactMessage = new ContactMessage({ name, email, message });
        await contactMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 