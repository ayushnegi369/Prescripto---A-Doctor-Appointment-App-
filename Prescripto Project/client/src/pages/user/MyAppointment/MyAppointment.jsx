import React, { useEffect, useState } from "react";
import "./MyAppointment.css";
import doc1 from "../../../assets/assets_frontend/doc1.png";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { getAppointmentsByUser, cancelAppointment } from "../../../api";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!user || !token) return;
        getAppointmentsByUser(user.id, token)
            .then(res => setAppointments(res.data))
            .catch(() => setError("Failed to load appointments"))
            .finally(() => setLoading(false));
    }, [user, token]);

    const handleCancel = async (id) => {
        try {
            await cancelAppointment(id, token);
            setAppointments(appointments.filter(a => a._id !== id));
        } catch {
            setError("Failed to cancel appointment");
        }
    };

    return (
        <>
            <Navbar />
            <div className="appointments-container">
                <h2>My Appointments</h2>
                {loading ? <p>Loading...</p> : null}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {appointments.map((appointment) => (
                    <div key={appointment._id} className="appointment-card">
                        <img src={doc1} alt="Doctor" className="doctor-image" />
                        <div className="appointment-details">
                            <h3>{appointment.doctor?.name || "Doctor"}</h3>
                            <p className="specialty">{appointment.doctor?.speciality}</p>
                            <p>
                                <strong>Date & Time:</strong> {appointment.date} {appointment.time}
                            </p>
                            <p>
                                <strong>Status:</strong> {appointment.status}
                            </p>
                        </div>
                        <div className="appointment-actions">
                            <button className="cancel-btn" onClick={() => handleCancel(appointment._id)}>
                                Cancel appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Appointments;
