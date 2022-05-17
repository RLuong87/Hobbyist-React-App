import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import './Card.css';

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
                <Link to="/createProfile">
                    <button className="btn3">Edit profile</button>
                </Link>
            </div>
        </div>
    )
}

export default Card;