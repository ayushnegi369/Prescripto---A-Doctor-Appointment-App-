import React, { useState } from "react";
import "./BookingSlot.css";

const BookingSlot = ({ setDate, setTime, onBook, loading }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const dates = [
        { label: "MON", value: "10" },
        { label: "TUE", value: "11" },
        { label: "WED", value: "12" },
        { label: "THU", value: "13" },
        { label: "FRI", value: "14" },
        { label: "SAT", value: "15" },
        { label: "SUN", value: "16" },
    ];
    const times = [
        "8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am"
    ];
    const handleDateClick = (date) => {
        setSelectedDate(date);
        if (setDate) setDate(date);
    };
    const handleTimeClick = (time) => {
        setSelectedTime(time);
        if (setTime) setTime(time);
    };
    return (
        <div className="booking-slot-container">
            <p>Booking Slots</p>
            <div className="slot-dates">
                {dates.map((d) => (
                    <div
                        className={`slot-date${selectedDate === d.value ? " selected-slot-date" : ""}`}
                        key={d.value}
                        onClick={() => handleDateClick(d.value)}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>{d.label}</p>
                        <p>{d.value}</p>
                    </div>
                ))}
            </div>
            <div className="slot-times">
                {times.map((t) => (
                    <div
                        key={t}
                        className={`slot-time${selectedTime === t ? " selected-slot-time" : ""}`}
                        onClick={() => handleTimeClick(t)}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>{t}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={onBook}
                disabled={!selectedDate || !selectedTime || loading}
            >
                {loading ? "Booking..." : "Book an appointment"}
            </button>
        </div>
    );
};

export default BookingSlot;
