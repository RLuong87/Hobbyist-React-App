import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return (
        <div>
            <a href="#" onClick={logout()} />
        </div>
    )
    
}

export default Logout;