import React, { useState } from "react";
import "./Signup.css";
import Navbar from "../../../components/Navbar/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../../../api";

const SignupForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            await signup({ name, email, password });
            setSuccess("Account created! Please login.");
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <>
            <div className="signup-container">
                <h2>Create Account</h2>
                <p>Please sign up to book an appointment</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" className="signup-btn">
                        Create account
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                </form>
                <p>
                    Already have an account?{" "}
                    <NavLink to="/login">Login here</NavLink>
                </p>
            </div>
        </>
    );
};

export default SignupForm;
