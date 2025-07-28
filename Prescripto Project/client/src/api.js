import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Auth
export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);

// Doctors
export const getDoctors = () => api.get('/doctors');
export const getDoctorById = (id) => api.get(`/doctors/${id}`);
export const addDoctor = (data, token) => api.post('/doctors', data, { headers: { Authorization: `Bearer ${token}` } });
export const updateDoctor = (id, data, token) => api.put(`/doctors/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteDoctor = (id, token) => api.delete(`/doctors/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Appointments
export const getAppointments = (token) => api.get('/appointments', { headers: { Authorization: `Bearer ${token}` } });
export const getAppointmentsByUser = (userId, token) => api.get(`/appointments/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } });
export const bookAppointment = (data, token) => api.post('/appointments', data, { headers: { Authorization: `Bearer ${token}` } });
export const updateAppointment = (id, data, token) => api.put(`/appointments/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const cancelAppointment = (id, token) => api.delete(`/appointments/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Users
export const getUserProfile = (id, token) => api.get(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const updateUserProfile = (id, data, token) => api.put(`/users/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });

// Contact
export const sendContactMessage = (data) => api.post('/contact', data);
// Update the Stripe payment intent endpoint to match backend
export const createStripePaymentIntent = (amount, currency = 'INR') => api.post('/appointments/payments/create-payment-intent', { amount, currency }); 