import React from "react";
import "./AdminSidebar.css";
import home_icon from "../../assets/assets_admin/home_icon.svg";
import appointment_icon from "../../assets/assets_admin/appointment_icon.svg";
import add_icon from "../../assets/assets_admin/add_icon.svg";
import people_icon from "../../assets/assets_admin/people_icon.svg";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: "/admin/dashboard", icon: home_icon, label: "Dashboard" },
        {
            path: "/admin/appointments",
            icon: appointment_icon,
            label: "Appointments",
        },
        { path: "/admin/add-doctor", icon: add_icon, label: "Add Doctors" },
        {
            path: "/admin/doctors-list",
            icon: people_icon,
            label: "Doctors List",
        },
    ];

    return (
        <div className="sidebar">
            {menuItems.map((item) => (
                <div
                    key={item.path}
                    className={`sidebar-item ${
                        location.pathname === item.path
                            ? "active-sidebar-item"
                            : ""
                    }`}
                    onClick={() => navigate(item.path)}
                >
                    <img src={item.icon} alt={item.label} />
                    <p>{item.label}</p>
                </div>
            ))}
        </div>
    );
};

export default AdminSidebar;
