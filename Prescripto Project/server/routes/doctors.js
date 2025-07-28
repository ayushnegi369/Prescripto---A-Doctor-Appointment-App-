const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
// Placeholder for JWT middleware
// const authenticateToken = require('../middleware/auth');

// Get all doctors
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get doctor by ID
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add doctor (admin only)
router.post('/', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.role !== 'admin') return res.sendStatus(403);
        const { name, email, speciality, bio, availableSlots } = req.body;
        const doctor = new Doctor({ name, email, speciality, bio, availableSlots });
        await doctor.save();
        res.status(201).json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update doctor (admin only)
router.put('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.role !== 'admin') return res.sendStatus(403);
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete doctor (admin only)
router.delete('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        // if (req.user.role !== 'admin') return res.sendStatus(403);
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json({ message: 'Doctor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 