import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import splashImg from '../../assets/fishing/ice-fishing.jpg';
import './ContentCard.css';

export default function ContentCard() {

    const [auth] = useContext(AuthContext);

    return (
        <div className="Content-card">
            <div className="upper-container">
                <div className="image-container2">
                    <img src={splashImg} />
                </div>
            </div>
            <div className="lower-container">
                <Link to="/createContent">
                    <button className="btn3">Create a post</button>
                </Link>
                <h1> {auth.name} </h1>
                <h2>First time ice fishing! #funtimes</h2>
            </div>
        </div>
    )

}