import React from "react";
import "./HeroSection.css";
import header_img from "../../assets/assets_frontend/header_img.png";
import group_profiles from "../../assets/assets_frontend/group_profiles.png";
import right_arrow from "../../assets/assets_frontend/right-arrow.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    const goToBookAppointment = () => {
        navigate("/doctors");
    };
    return (
        <div className="herosection-parent">
            <div className="left-section">
                <div className="left-section-text-parent">
                    <p className="left-section-text">
                        Book Appointment <br /> With Trusted Doctors
                    </p>
                </div>
                <div className="left-section-subHeroSection">
                    <img
                        className="left-section-group-profile-image"
                        src={group_profiles}
                        alt="Group Profiles"
                    />
                    <p className="left-section-subHeroSection-text">
                        Simply browse through our extensive list of trusted
                        <br />
                        doctors, schedule your appointment hassle-free.
                    </p>
                </div>
                <div className="left-section-button-parent">
                    <button
                        onClick={goToBookAppointment}
                        className="left-section-button"
                    >
                        Book Appointment
                        <img
                            className="right-arrow-icon"
                            src={right_arrow}
                            alt="Right Arrow"
                        />
                    </button>
                </div>
            </div>
            <div className="right-section">
                <img
                    className="herosection-image"
                    src={header_img}
                    alt="HeroSection Image"
                />
            </div>
        </div>
    );
};

export default HeroSection;
