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

    return <h1>Kiitos ostoksista!</h1>;
}

export default Checkout;