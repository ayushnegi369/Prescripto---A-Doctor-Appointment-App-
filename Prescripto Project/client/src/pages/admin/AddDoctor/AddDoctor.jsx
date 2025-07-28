import React, { useState } from "react";
import "./AddDoctor.css";
import AdminNavbar from "../../../components/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../../components/AdminSidebar/AdminSidebar";
import { addDoctor } from "../../../api";

const AddDoctorForm = () => {
    const [form, setForm] = useState({ name: "", email: "", speciality: "", bio: "", availableSlots: [] });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const token = localStorage.getItem("token");

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            await addDoctor(form, token);
            setSuccess("Doctor added!");
            setForm({ name: "", email: "", speciality: "", bio: "", availableSlots: [] });
        } catch {
            setError("Failed to add doctor");
        }
    };

    return (
        <>
        <AdminNavbar />
        <AdminSidebar />
        <div className="form-container">
            <h3>Add Doctor</h3>
            <div className="form-box">
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Doctor name</label>
                            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Speciality</label>
                            <input type="text" name="speciality" placeholder="Speciality" value={form.speciality} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Doctor Email</label>
                            <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} />
                        </div>
                        <div className="form-group full-width">
                            <label>About me</label>
                            <textarea name="bio" placeholder="Write about yourself" value={form.bio} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">
                        Add doctor
                    </button>
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
        </>
    );
};

export default AddDoctorForm;
