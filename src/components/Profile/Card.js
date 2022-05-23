import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import './Card.css';

export default function Card() {

    const [auth, setAuth] = useContext(AuthContext);

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://pbs.twimg.com/profile_images/1237550450/mstom.jpg" />
                </div>
            </div>
            <div className="lower-container">
                <h3> {auth.name} </h3>
                <Link to="/createProfile">
                    <button className="btn3">Edit profile</button>
                </Link>
                <h4> {auth.status} </h4>
                <h4> {auth.birthday} </h4>
                <h4> {auth.location} </h4>
                <p> {auth.about} </p>
            </div>
        </div>
    )
}