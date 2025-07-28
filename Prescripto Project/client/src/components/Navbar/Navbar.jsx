import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import profile_pic from "../../assets/assets_frontend/profile_pic.png";
import { NavLink, useNavigate } from "react-router-dom";

const getInitials = (name) => {
    if (!name) return "U";
    const names = name.trim().split(" ");
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
};

const Navbar = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const user = JSON.parse(localStorage.getItem("user"));

    const goToSignup = () => {
        navigate("/signup");
    };

    const handleAvatarClick = () => {
        setDropdownOpen((open) => !open);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setDropdownOpen(false);
        navigate("/login");
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <div className="container">
            <NavLink to="/" className="link-item">
                <div className="logo_class">
                    <img
                        className="logo"
                        src="logo.png"
                        alt="Prescripto Logo"
                    />
                    <h2 className="logo-text">Prescripto</h2>
                </div>
            </NavLink>
            <div className="links_class">
                <ul className="links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "link-item active-link" : "link-item"
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/doctors"
                            className={({ isActive }) =>
                                isActive ? "link-item active-link" : "link-item"
                            }
                        >
                            ALL DOCTORS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "link-item active-link" : "link-item"
                            }
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "link-item active-link" : "link-item"
                            }
                        >
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
            {user ? (
                <div className="logged-in" ref={dropdownRef}>
                    <div className="user-initials-avatar" onClick={handleAvatarClick} title={user.name}>
                        {getInitials(user.name)}
                    </div>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <NavLink
                                        className="dropdown-menu-item"
                                        to="/profile"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="dropdown-menu-item"
                                        to="/appointments"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        My Appointments
                                    </NavLink>
                                </li>
                                <li>
                                    <button className="dropdown-menu-item logout-btn" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className="login_class">
                    <button onClick={goToSignup}>Create Account</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
