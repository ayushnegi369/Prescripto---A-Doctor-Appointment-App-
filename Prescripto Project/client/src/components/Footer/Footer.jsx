import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-parent">
            <div className="section-1">
                {/* About Section */}
                <div className="abouts-section">
                    <div className="sub-section-1">
                        <img
                            className="logo"
                            src="logo.png"
                            alt="Prescripto Logo"
                        />
                        <h2 className="logo-text">Prescripto</h2>
                    </div>
                    <p>
                        Prescripto is your trusted healthcare companion, making
                        it easy to connect with top doctors, book appointments,
                        and manage prescriptions effortlessly. Our platform
                        provides seamless medical assistance, ensuring
                        convenient and reliable healthcare at your fingertips.
                    </p>
                </div>

                {/* Links Section */}
                <div className="links-section">
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="contacts-section">
                    <h3>GET IN TOUCH</h3>
                    <p>📞 +1-212-456-7890</p>
                    <p>📧 prescripto@gmail.com</p>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="section-2">
                <p>© 2025 Prescripto. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
