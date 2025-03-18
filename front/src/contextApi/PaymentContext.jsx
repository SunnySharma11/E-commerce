import { createContext, useContext, useEffect } from "react";
import axios from "axios";


const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayment = async (amount) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await axios.post("http://localhost:5000/create-order", { amount });
    
                if (!window.Razorpay) {
                    alert("Razorpay SDK failed to load. Check your internet connection.");
                    return reject("Razorpay SDK failed to load");
                }
    
                const options = {
                    key: "rzp_test_z52ifnnAc5u98u",
                    amount: data.amount,
                    currency: "INR",
                    order_id: data.id,
                    handler: async function (response) {
                        try {
                            const verifyRes = await axios.post("http://localhost:5000/verify-payment", response);
                            if (verifyRes.data.success) {
                                resolve({ response, amount: data.amount });
                            } else {
                                alert("Payment verification failed!");
                                reject("Payment verification failed");
                            }
                        } catch (err) {
                            console.error("Verification Error:", err);
                            reject(err);
                        }
                    },
                    prefill: {
                        name: "John Doe",
                        email: "johndoe@example.com",
                        contact: "9999999999",
                    },
                    theme: { color: "#3399cc" },
                };
    
                const rzp = new window.Razorpay(options);
                rzp.open();
            } catch (error) {
                console.error("Error during payment:", error);
                reject(error);
            }
        });
    };
    

    return (
        <PaymentContext.Provider value={{ handlePayment }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => {
    return useContext(PaymentContext);
};









