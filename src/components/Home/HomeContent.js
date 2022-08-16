import React from "react";
import BorderCard from "../common/BorderCard";
import { Link } from "react-router-dom";

const HomeContent = (props) => {

    const { angler: { avatar, name }, localDateTime, content, picture } = props.contents;

    return (
        <div className="align-content">
            <div className="Content-card">
                <div className="upper-container">
                    <h3>{name}</h3>
                    <p>{localDateTime}</p>
                    <div className="image-container4">
                        <img src={avatar} />
                        <Link to="/users/:userId">
                        </Link>
                    </div>
                </div>
                <div className="lower-container">
                    <p>{content}</p>
                    <div className="image-container3">
                        <img src={picture} />
                    </div>
                </div>
                <button className="btn3">Like</button>
            </div>
        </div>
    )
}

export default HomeContent;