import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Checkout() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="checkout-container">
            <h1 className="checkout-message">Kiitos ostoksista!</h1>
            <p className="checkout-subtext">Sinut ohjataan takaisin etusivulle hetken kuluttua...</p>
        </div>
    );
}

export default Checkout;