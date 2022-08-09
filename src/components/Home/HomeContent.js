import React from "react";
import BorderCard from "../common/BorderCard";
import { Link } from "react-router-dom";

const HomeContent = (props) => {

    const { angler: { name }, localDateTime, content } = props.contents;

    return (
        <BorderCard>
            <div className="upper-container">
                <p>{localDateTime}</p>
            </div>
            <div className="lower-container">
                <Link to="/users/:userId">
                    <h3>{name}</h3>
                </Link>
                <p>{content}</p>
                <button className="btn3">Like</button>
            </div>
        </BorderCard>
    )
}

export default HomeContent;