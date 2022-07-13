import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import splashImg from '../../assets/fishing/ice-fishing.jpg';
import TextArea from "../common/TextArea";
import './ContentCard.css';

export default function ContentCard() {

    const [auth] = useContext(AuthContext);

    return (
        <div className="Content-card">
            <div className="lower-container">
                <TextArea />
                <Link to="/createContent">
                    <button className="content-btn">Create a post</button>
                </Link>
                {/* <h1> {auth.name} </h1> */}
                <h2>First time ice fishing! #funtimes</h2>
                <div className="image-container2">
                    <img src={splashImg} />
                </div>
            </div>
        </div>
    )
}