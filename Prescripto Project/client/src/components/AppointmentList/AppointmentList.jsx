import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./AppointmentList.css";

const appointments = [
    { id: 1, name: "Dr. Richard James", date: "24th July, 2024" },
    { id: 2, name: "Dr. Richard James", date: "24th July, 2024" },
    { id: 3, name: "Dr. Richard James", date: "24th July, 2024" },
    { id: 4, name: "Dr. Richard James", date: "24th July, 2024" },
    { id: 5, name: "Dr. Richard James", date: "24th July, 2024" },
];

const LatestAppointments = () => {
    return (
        <div className="latest-appointments-container">
            <div className="header">
                <FaCalendarCheck className="icon" />
                <h2 className="title">Latest Appointment</h2>
            </div>
            <ul className="appointments-list">
                {appointments.map((appointment) => (
                    <li key={appointment.id} className="appointment-item">
                        <div className="appointment-info">
                            <img
                                src="https://randomuser.me/api/portraits/women/45.jpg"
                                alt="doctor"
                                className="profile-pic"
                            />
                            <div>
                                <p className="doctor-name">
                                    {appointment.name}
                                </p>
                                <p className="booking-date">
                                    Booking on {appointment.date}
                                </p>
                            </div>
                        </div>
                        <button className="delete-button">
                            <IoClose />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LatestAppointments;
