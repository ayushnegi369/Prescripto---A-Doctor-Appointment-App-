import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../api";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await login({ email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            if (res.data.user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <p>Enter your credentials to access your account</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="submit" className="login-btn">
                    Login
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <p>
                Don't have an account?{" "}
                <NavLink to="/signup">Sign up here</NavLink>
            </p>
        </div>
    );
};

export default LoginForm;
