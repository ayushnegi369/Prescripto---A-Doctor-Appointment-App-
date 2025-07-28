import React, { useState } from "react";
import "./Contact.css";
import contactImage from "../../../assets/assets_frontend/contact_image.png";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { sendContactMessage } from "../../../api";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            await sendContactMessage(form);
            setSuccess("Message sent!");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setError("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">
            <Navbar />
            <h2 className="contact-title">
                CONTACT <span className="highlight">US</span>
            </h2>
            <div className="contact-content">
                <div className="contact-image">
                    <img src={contactImage} alt="Doctor with patient" />
                </div>
                <div className="contact-details">
                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input className="contact-input" id="name" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input className="contact-input" id="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea className="contact-textarea" id="message" name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
                            <button className="contact-submit-btn" type="submit" disabled={loading}>
                                Send Message
                            </button>
                            {success && <div className="contact-success-msg">{success}</div>}
                            {error && <div className="contact-error-msg">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
