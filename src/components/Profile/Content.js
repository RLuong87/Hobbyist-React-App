import React from "react";
import BorderCard from "../common/BorderCard";

const DisplayContent = (props) => {

    const { id, name, title, content } = props.contents;

    return (
        <BorderCard>
            <div className="upper-container">
            </div>
            <div className="lower-container">
                <h1>{name}</h1>
                <h4>{title}</h4>
                <h4>{content}</h4>
            </div>
        </BorderCard>
    )
}

export default DisplayContent;