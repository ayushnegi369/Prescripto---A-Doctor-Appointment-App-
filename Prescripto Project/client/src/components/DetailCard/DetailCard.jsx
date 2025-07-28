import React, { useContext } from "react";
import "./DetailCard.css";
import verified_icon from "../../assets/assets_frontend/verified_icon.svg";
import info_icon from "../../assets/assets_frontend/info_icon.svg";
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
import doc11 from "../../assets/assets_frontend/doc11.png";
import doc12 from "../../assets/assets_frontend/doc12.png";
import doc13 from "../../assets/assets_frontend/doc13.png";
import doc14 from "../../assets/assets_frontend/doc14.png";
import doc15 from "../../assets/assets_frontend/doc15.png";
import { DetailCardContext } from "../DetailCardContextFolder/DetailCardContext";

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
  "doc11.png": doc11,
  "doc12.png": doc12,
  "doc13.png": doc13,
  "doc14.png": doc14,
  "doc15.png": doc15,
};

const DetailCard = () => {
    const { doctor } = useContext(DetailCardContext);
    if (!doctor) return null;
    return (
        <div className="detail-card-container">
            <div className="image-section">
                <img
                    className="doctor-image-dimension"
                    src={imageMap[doctor.image] || doc1}
                    alt={doctor.name}
                />
            </div>
            <div className="detail-section">
                <div className="doctor-name-container">
                    <p className="doctor-name">{doctor.name}</p>
                    <img src={verified_icon} alt="Verification Badge" />
                </div>
                <div className="career-detail">
                    <p>{doctor.speciality}</p>
                    <div>
                        <p>{doctor.experience}</p>
                    </div>
                </div>
                <div className="about-container">
                    <div className="sub-about-container">
                        <p>About</p>
                        <img src={info_icon} alt="Information Icon" />
                    </div>
                    <p>{doctor.about}</p>
                </div>
                <p>
                    Appointment Fee: <span>{doctor.fee}</span>
                </p>
            </div>
        </div>
    );
};

export default DetailCard;
