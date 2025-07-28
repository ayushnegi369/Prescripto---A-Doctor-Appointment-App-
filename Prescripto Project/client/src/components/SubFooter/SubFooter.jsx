import React from "react";
import "./SubFooter.css";
import appointment_img from "../../assets/assets_frontend/appointment_img.png";
import { useNavigate } from "react-router-dom";

const SubFooter = () => {
    const navigate = useNavigate();
    const goToBookSingup = () => {
        navigate("/signup");
    };
    return (
        <div className="subfooter-parent">
            <div className="subfooter-left-section">
                <p className="book-appointment-text">
                    Book Appointment <br />
                    With 100+ Trusted Doctors
                </p>
                <button
                    onClick={goToBookSingup}
                    className="create-account-button"
                >
                    Create Account
                </button>
            </div>
            <div className="subfooter-right-section">
                <img
                    className="appointment-image"
                    src={appointment_img}
                    alt="Appointment Image"
                />
            </div>
        </div>
    );
};

export default SubFooter;
