import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/signup")
    }
}

export default Logout;