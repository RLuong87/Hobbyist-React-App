import React from "react";
import BorderCard from "../common/BorderCard";
import DeleteContent from "./DeleteContent";

const DisplayContent = (props) => {

    const { angler: { name }, id, title, content } = props.contents;

    return (
        <BorderCard>
            <div className="upper-container">
                <h2>{name}</h2>
            </div>
            <div className="lower-container">
                <h4>{title}</h4>
                <h4>{content}</h4>
            </div>
        </BorderCard>
    )
}

export default DisplayContent;