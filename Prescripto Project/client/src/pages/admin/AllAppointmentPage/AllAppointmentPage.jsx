import React, { useEffect, useState } from "react";
import "./AllAppointmentPage.css";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import doc1 from "../../../assets/assets_frontend/doc1.png";
import { getAppointments, cancelAppointment } from "../../../api";

const AppointmentsTable = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) return;
        getAppointments(token)
            .then(res => setAppointments(res.data))
            .catch(() => setError("Failed to load appointments"))
            .finally(() => setLoading(false));
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await cancelAppointment(id, token);
            setAppointments(appointments.filter(a => a._id !== id));
        } catch {
            setError("Failed to delete appointment");
        }
    };

    return (
        <>
        <AdminNavbar />
        <AdminSidebar />
        <div className="appointments-container">
            <h3>All Appointments</h3>
            {loading ? <p>Loading...</p> : null}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table className="appointments-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Patient</th>
                        <th>Department</th>
                        <th>Date & Time</th>
                        <th>Doctor</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, idx) => (
                        <tr key={appointment._id}>
                            <td>{idx + 1}</td>
                            <td>{appointment.user?.name || "User"}</td>
                            <td>{appointment.doctor?.speciality}</td>
                            <td>{appointment.date} {appointment.time}</td>
                            <td>{appointment.doctor?.name}</td>
                            <td>{appointment.status}</td>
                            <td>
                                <button className="delete-btn" onClick={() => handleDelete(appointment._id)}>✖</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default AppointmentsTable;
