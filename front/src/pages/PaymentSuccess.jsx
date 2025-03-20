import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const PaymentSuccess = () => {
    const location = useLocation();
    const { response, amount } = location.state || {};
    const navigate = useNavigate();

    return (
        <>
        <div>
            <h2>Payment Successful 🎉</h2>
            <p><strong>Payment ID:</strong> {response?.razorpay_payment_id}</p>
            <p><strong>Order ID:</strong> {response?.razorpay_order_id}</p>
            <p><strong>Amount:</strong> ₹{amount / 100}</p>
        </div>
        <button className="tw:button" onClick={ () =>navigate("/")}>go back </button>
        </>
    );
};

export default PaymentSuccess;
