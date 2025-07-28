import React, { useEffect, useState } from "react";
import "./Profile.css";
import profile_pic from "../../../assets/assets_frontend/profile_pic.png";
import Navbar from "../../../components/Navbar/Navbar";
import { getUserProfile, updateUserProfile } from "../../../api";

const ProfileCard = () => {
    const [profile, setProfile] = useState(null);
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState({ name: "", email: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!user || !token) return;
        getUserProfile(user.id, token)
            .then(res => {
                setProfile(res.data);
                setForm({ name: res.data.name, email: res.data.email });
            })
            .catch(() => setError("Failed to load profile"));
    }, [user, token]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setError("");
        setSuccess("");
        try {
            const res = await updateUserProfile(user.id, form, token);
            setProfile(res.data);
            setEdit(false);
            setSuccess("Profile updated!");
        } catch {
            setError("Failed to update profile");
        }
    };

    if (!profile) return <div><Navbar /><p>Loading...</p></div>;

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
                    <img
                        src={profile_pic}
                        alt="Profile"
                        className="profile-pic"
                    />
                </div>
                {edit ? (
                    <>
                        <input name="name" value={form.name} onChange={handleChange} />
                        <input name="email" value={form.email} onChange={handleChange} />
                    </>
                ) : (
                    <>
                        <h2 className="profile-name">{profile.name}</h2>
                        <hr />
                        <div className="profile-section">
                            <h3>CONTACT INFORMATION</h3>
                            <p>
                                <strong>Email id:</strong> {profile.email}
                            </p>
                        </div>
                    </>
                )}
                <div className="profile-actions">
                    {edit ? (
                        <button className="save-btn" onClick={handleSave}>Save information</button>
                    ) : (
                        <button className="edit-btn" onClick={() => setEdit(true)}>Edit</button>
                    )}
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>
        </>
    );
};

export default ProfileCard;
