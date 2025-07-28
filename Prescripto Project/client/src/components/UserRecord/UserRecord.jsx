import React from "react";
import "./UserRecord.css";
import patient_icon from "../../assets/assets_admin/patient_icon.svg";
import appointments_icon from "../../assets/assets_admin/appointments_icon.svg";
import patients_icon from "../../assets/assets_admin/patients_icon.svg";

const UserRecord = () => {
    return (
        <div className="user-record">
            <div className="stat-div doctor-stat-div">
                <div className="img-container">
                    <img src={patient_icon} alt="No of Doctors Available" />
                </div>
                <div className="stat-container">
                    <p className="stat-count">14</p>
                    <p className="stat-text">Doctors</p>
                </div>
            </div>
            <div className="stat-div">
                <div className="img-container">
                    <img
                        src={appointments_icon}
                        alt="No of Doctors Available"
                    />
                </div>
                <div className="stat-container">
                    <p className="stat-count">2</p>
                    <p className="stat-text">Appointments</p>
                </div>
            </div>
            <div className="stat-div">
                <div className="img-container">
                    <img src={patients_icon} alt="No of Doctors Available" />
                </div>
                <div className="stat-container">
                    <p className="stat-count">5</p>
                    <p className="stat-text">Patients</p>
                </div>
            </div>
        </div>
    );
};

export default UserRecord;
