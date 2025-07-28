const express = require('express');
const router = express.Router();
const User = require('../models/User');
// Placeholder for JWT middleware
// const authenticateToken = require('../middleware/auth');

// Get user profile
router.get('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.id !== req.params.id) return res.sendStatus(403);
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update user profile
router.put('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.id !== req.params.id) return res.sendStatus(403);
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 