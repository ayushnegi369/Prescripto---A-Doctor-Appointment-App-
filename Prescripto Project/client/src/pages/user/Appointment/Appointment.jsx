import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import DetailCard from "../../../components/DetailCard/DetailCard";
import BookingSlot from "../../../components/BookingSlot/BookingSlot";
import RelatedDocs from "../../../components/RelatedDoctors/RelatedDocs";
import Footer from "../../../components/Footer/Footer";
import { DetailCardContext } from "../../../components/DetailCardContextFolder/DetailCardContext";
import { bookAppointment, createStripePaymentIntent } from "../../../api";
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripePaymentForm({ onSuccess, onClose, user, doctor, date, time, token }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleStripePayment = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        setLoading(true);
        const { error: stripeError } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.href,
            },
            redirect: "if_required"
        });
        if (stripeError) {
            console.error('Stripe error:', stripeError); // Log full error
            setError(stripeError.message || 'Payment failed');
            setLoading(false);
            return;
        }
        // Payment succeeded, book appointment
        try {
            await bookAppointment({ user: user.id, doctor: doctor._id, date, time }, token);
            onSuccess && onSuccess();
        } catch (err) {
            console.error('Book appointment error:', err, err?.response);
            setError(err?.response?.data?.message || "Failed to book appointment after payment");
        }
        setLoading(false);
    };

    return (
        <div className="stripe-modal-overlay">
            <div className="stripe-modal">
                <h3>Complete Payment</h3>
                <form onSubmit={handleStripePayment}>
                    <PaymentElement />
                    <button type="submit" disabled={!stripe || loading} style={{marginTop: 16}}>
                        {loading ? "Processing..." : "Pay & Book Appointment"}
                    </button>
                    <button type="button" onClick={onClose} style={{marginLeft: 8}} disabled={loading}>
                        Cancel
                    </button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

const Appointment = () => {
    const navigate = useNavigate();
    const { doctor, setDoctor } = useContext(DetailCardContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!doctor) {
            const stored = localStorage.getItem('selectedDoctor');
            if (stored) {
                setDoctor(JSON.parse(stored));
            } else {
                // Redirect to doctor selection if no doctor info
                navigate("/doctors");
            }
        }
        return () => {
            localStorage.removeItem('selectedDoctor');
        };
    }, [doctor, setDoctor, navigate]);

    const handleBook = async () => {
        setError("");
        setSuccess("");
        setLoading(true);
        if (!user || !doctor || !date || !time) {
            setError("Please select all fields");
            setLoading(false);
            return;
        }
        // Defensive check for doctor._id
        if (!doctor._id) {
            console.error('Doctor object is missing or invalid:', doctor);
            setError("Doctor information is missing. Please select a doctor again.");
            setLoading(false);
            return;
        }
        // Parse fee (e.g., "$100" -> 100)
        let amount = 100;
        if (doctor.fee) {
            const match = doctor.fee.match(/\d+/);
            if (match) amount = parseInt(match[0], 10);
        }
        try {
            // 1. Create Stripe Payment Intent
            const res = await createStripePaymentIntent(amount, "INR");
            setClientSecret(res.data.clientSecret);
            setShowPayment(true);
        } catch (err) {
            setError("Payment could not be initiated");
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <DetailCard />
            <BookingSlot setDate={setDate} setTime={setTime} onBook={handleBook} loading={loading} />
            {showPayment && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <StripePaymentForm
                        onSuccess={() => {
                            setSuccess("Appointment booked successfully!");
                            setShowPayment(false);
                            localStorage.removeItem('selectedDoctor');
                        }}
                        onClose={() => setShowPayment(false)}
                        user={user}
                        doctor={doctor}
                        date={date}
                        time={time}
                        token={token}
                    />
                </Elements>
            )}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <RelatedDocs />
            <Footer />
            <style>{`
                .stripe-modal-overlay {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }
                .stripe-modal {
                    background: #fff;
                    padding: 32px 24px;
                    border-radius: 12px;
                    box-shadow: 0 4px 32px rgba(0,0,0,0.18);
                    min-width: 340px;
                }
            `}</style>
        </div>
    );
};

export default Appointment;
