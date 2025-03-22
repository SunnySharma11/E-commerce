import { useState } from "react";


import { usePayment } from "../contextApi/PaymentContext";
import { useNavigate } from "react-router-dom";

export const useHelper = () => {
    const { handlePayment } = usePayment();
    const navigate = useNavigate();

    const handlePaymentAndRedirect = async (amount) => {
        try {
            const paymentData = await handlePayment(amount);
            navigate("/payment-success", { state: paymentData });
        } catch (error) {
            console.error("Payment Failed:", error);
        }
    };

   // create as more as u want and just return them like in a object **

    return { handlePaymentAndRedirect};
};
