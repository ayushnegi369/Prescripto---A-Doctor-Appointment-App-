import React from "react";
import "./AboutUs.css";
import Navbar from "../../../components/Navbar/Navbar";
import doc1 from "../../../assets/assets_frontend/doc1.png";
import Footer from "../../../components/Footer/Footer";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h2 className="about-title">
                    ABOUT <span className="highlight">US</span>
                </h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src={doc1} alt="Doctor 1" className="doc-image" />
                    </div>
                    <div className="about-text">
                        <p>
                            Welcome to Prescripto, your trusted partner in
                            managing your healthcare needs conveniently and
                            efficiently. At Prescripto, we understand the
                            challenges individuals face when it comes to
                            scheduling doctor appointments and managing their
                            health records.
                        </p>
                        <p>
                            Prescripto is committed to excellence in healthcare
                            technology. We continuously strive to enhance our
                            platform, integrating the latest advancements to
                            improve user experience and deliver superior
                            service. Whether you're booking your first
                            appointment or managing ongoing care, Prescripto is
                            here to support you every step of the way.
                        </p>
                        <h3 className="vision-title">Our Vision</h3>
                        <p>
                            Our vision at Prescripto is to create a seamless
                            healthcare experience for every user. We aim to
                            bridge the gap between patients and healthcare
                            providers, making it easier for you to access the
                            care you need, when you need it.
                        </p>
                    </div>
                </div>
                <h2 className="choose-title">
                    WHY <span className="highlight">CHOOSE US</span>
                </h2>
                <div className="choose-container">
                    <div className="choose-box">
                        <h3 className="choose-heading">EFFICIENCY:</h3>
                        <p>
                            Streamlined appointment scheduling that fits into
                            your busy lifestyle.
                        </p>
                    </div>
                    <div className="choose-box">
                        <h3 className="choose-heading">CONVENIENCE:</h3>
                        <p>
                            Access to a network of trusted healthcare
                            professionals in your area.
                        </p>
                    </div>
                    <div className="choose-box">
                        <h3 className="choose-heading">PERSONALIZATION:</h3>
                        <p>
                            Tailored recommendations and reminders to help you
                            stay on top of your health.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
