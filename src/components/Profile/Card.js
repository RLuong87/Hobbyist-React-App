import React, { useState, useContext } from "react";
import './Card.css';
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from 'react-router-dom'
 
function Card() {

    const [auth] = useContext(AuthContext);

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg" />
                </div>
            </div>
            <div className="lower-container">
                <h3> {auth.name} </h3>
                <h4> {auth.status} </h4>
                <h4> {auth.birthday} </h4>
                <h4> {auth.location} </h4>
                <p> {auth.about} </p>
                <button>Visit Profile</button>
            </div>
        </div>
    )
}

export default Card;