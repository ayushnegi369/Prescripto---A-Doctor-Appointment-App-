const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    speciality: { type: String, required: true },
    bio: { type: String },
    availableSlots: [{ type: String }],
    image: { type: String },
    experience: { type: String },
    fee: { type: String },
    about: { type: String },
    available: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doctor', DoctorSchema); 