import React, { useContext } from "react";
import "./Doctors.css";
import doc1 from "../../assets/assets_frontend/doc1.png";
import doc2 from "../../assets/assets_frontend/doc2.png";
import doc3 from "../../assets/assets_frontend/doc3.png";
import doc4 from "../../assets/assets_frontend/doc4.png";
import doc5 from "../../assets/assets_frontend/doc5.png";
import doc6 from "../../assets/assets_frontend/doc6.png";
import doc7 from "../../assets/assets_frontend/doc7.png";
import doc8 from "../../assets/assets_frontend/doc8.png";
import doc9 from "../../assets/assets_frontend/doc9.png";
import doc10 from "../../assets/assets_frontend/doc10.png";
import dot from "../../assets/assets_frontend/dot.png";
import { useNavigate } from "react-router-dom";
import { DetailCardContext } from "../DetailCardContextFolder/DetailCardContext";

const Doctors = () => {
    const { setDoctor } = useContext(DetailCardContext);
    const navigate = useNavigate();
    const goToAllDoctors = () => {
        navigate("/doctors");
    };
    const doctors = [
        {
            id: 1,
            name: "Dr. John Doe",
            speciality: "Cardiologist",
            image: "doc1.png",
            available: true,
            experience: "10 Years",
            fee: "$100",
            about: "Dr. John Doe is a renowned Cardiologist with over a decade of experience.",
            bio: "Cardiologist with 10 years of experience.",
            availableSlots: ["10:00 AM", "2:00 PM"]
        },
        {
            id: 2,
            name: "Dr. Emily Smith",
            speciality: "Neurologist",
            image: "doc2.png",
            available: true,
            experience: "8 Years",
            fee: "$90",
            about: "Dr. Emily Smith is a highly skilled Neurologist, specializing in neurological disorders.",
            bio: "Neurologist with 8 years of experience.",
            availableSlots: ["9:00 AM", "1:00 PM"]
        },
        {
            id: 3,
            name: "Dr. Michael Johnson",
            speciality: "Orthopedic Surgeon",
            image: "doc3.png",
            available: true,
            experience: "12 Years",
            fee: "$120",
            about: "Dr. Michael Johnson has extensive experience in orthopedic surgeries.",
            bio: "Orthopedic Surgeon with 12 years of experience.",
            availableSlots: ["10:30 AM", "4:00 PM"]
        },
        {
            id: 4,
            name: "Dr. Sarah Williams",
            speciality: "Dermatologist",
            image: "doc4.png",
            available: true,
            experience: "6 Years",
            fee: "$80",
            about: "Dr. Sarah Williams is an expert Dermatologist focusing on skincare.",
            bio: "Dermatologist with 6 years of experience.",
            availableSlots: ["12:00 PM", "5:00 PM"]
        },
        {
            id: 5,
            name: "Dr. David Brown",
            speciality: "Pediatrician",
            image: "doc5.png",
            available: true,
            experience: "9 Years",
            fee: "$75",
            about: "Dr. David Brown is a compassionate Pediatrician dedicated to children's health.",
            bio: "Pediatrician with 9 years of experience.",
            availableSlots: ["9:30 AM", "2:30 PM"]
        },
        {
            id: 6,
            name: "Dr. Olivia Jones",
            speciality: "Oncologist",
            image: "doc6.png",
            available: true,
            experience: "15 Years",
            fee: "$150",
            about: "Dr. Olivia Jones is a leading Oncologist specializing in cancer treatment.",
            bio: "Oncologist with 15 years of experience.",
            availableSlots: ["11:30 AM", "3:30 PM"]
        },
        {
            id: 7,
            name: "Dr. James Miller",
            speciality: "Psychiatrist",
            image: "doc7.png",
            available: true,
            experience: "11 Years",
            fee: "$95",
            about: "Dr. James Miller focuses on mental health and psychiatric treatments.",
            bio: "Psychiatrist with 11 years of experience.",
            availableSlots: ["10:15 AM", "1:45 PM"]
        },
        {
            id: 8,
            name: "Dr. Sophia Wilson",
            speciality: "Endocrinologist",
            image: "doc8.png",
            available: true,
            experience: "7 Years",
            fee: "$85",
            about: "Dr. Sophia Wilson specializes in hormone-related disorders.",
            bio: "Endocrinologist with 7 years of experience.",
            availableSlots: ["9:45 AM", "2:15 PM"]
        },
        {
            id: 9,
            name: "Dr. William Anderson",
            speciality: "Ophthalmologist",
            image: "doc9.png",
            available: true,
            experience: "10 Years",
            fee: "$110",
            about: "Dr. William Anderson is a skilled Ophthalmologist focusing on eye health.",
            bio: "Ophthalmologist with 10 years of experience.",
            availableSlots: ["8:30 AM", "12:30 PM"]
        },
        {
            id: 10,
            name: "Dr. Isabella Martinez",
            speciality: "Gastroenterologist",
            image: "doc10.png",
            available: true,
            experience: "14 Years",
            fee: "$130",
            about: "Dr. Isabella Martinez is a Gastroenterologist with expertise in digestive health.",
            bio: "Gastroenterologist with 14 years of experience.",
            availableSlots: ["11:15 AM", "4:15 PM"]
        },
    ];

    const imageMap = {
      "doc1.png": doc1,
      "doc2.png": doc2,
      "doc3.png": doc3,
      "doc4.png": doc4,
      "doc5.png": doc5,
      "doc6.png": doc6,
      "doc7.png": doc7,
      "doc8.png": doc8,
      "doc9.png": doc9,
      "doc10.png": doc10,
    };

    const handleClick = (doctor) => {
        setDoctor(doctor);
        localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
        navigate("/book-slot");
    };

    return (
        <div className="doctors-parent">
            <p className="doctors-text">Top Doctors to Book</p>
            <p className="doctors-description-text">
                Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <div
                        onClick={() => handleClick(doctor)}
                        key={doctor.id}
                        className="doctor-card"
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="card-image-section">
                            <img
                                className="card-image-doctor"
                                src={imageMap[doctor.image]}
                                alt={doctor.name}
                                info={doctor.speciality}
                            />
                        </div>
                        <div className="card-text-section">
                            <p className="availability-text">
                                <img
                                    className="available-dot"
                                    src={dot}
                                    alt="Available"
                                />
                                {doctor.available
                                    ? "Available"
                                    : "Not Available"}
                            </p>
                            <p>{doctor.name}</p>
                            <p className="doctors-speciality-text">
                                {doctor.speciality}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="more-button" onClick={goToAllDoctors}>
                more
            </button>
        </div>
    );
};

export default Doctors;
