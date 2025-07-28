import React from "react";
import "./Dashboard.css";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import UserRecord from "../../../components/UserRecord/UserRecord";
import LatestAppointments from "../../../components/AppointmentList/AppointmentList";

const Dashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <AdminSidebar />
            <UserRecord />
            <LatestAppointments />
        </div>
    );
};

export default Dashboard;
