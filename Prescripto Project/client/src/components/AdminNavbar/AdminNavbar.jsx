import React from "react";
import "./AdminNavbar.css";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
    const navigate = useNavigate();
    const goToAdminDashboard = () => {
        navigate("/admin/dashboard");
    };
    return (
        <div className="container2">
            <div className="logo_class2" onClick={goToAdminDashboard}>
                <img className="logo2" src={logo} alt="Prescripto Logo" />
                <h2 className="logo-text2">Prescripto</h2>
                <p className="admin-badge">Admin</p>
            </div>
            <div className="login_class2">
                <button>Logout</button>
            </div>
        </div>
    );
};

export default AdminNavbar;
