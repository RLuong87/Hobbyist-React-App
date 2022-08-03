import React from "react";
import BorderCard from "../common/BorderCard";

const HomeContent = (props) => {

    const { angler: { name }, localDateTime, content } = props.contents;

    return (
        <BorderCard>
            <div className="upper-container">
                <p>{localDateTime}</p>
                <h2>{name}</h2>
            </div>
            <div className="lower-container">
                <h4>{content}</h4>
                <button className="btn3">Like</button>
            </div>
        </BorderCard>
    )
}

export default HomeContent;