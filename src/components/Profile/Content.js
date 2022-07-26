import React from "react";
import BorderCard from "../common/BorderCard";
import { useNavigate } from 'react-router-dom';

const DisplayContent = (props) => {

    const { angler: { name }, id, title, content } = props.contents;
    let navigate = useNavigate();

    const onClick = () => {
        navigate(`/delete/${id}`)
    }

    const editPost = () => {
        navigate(`/update/${id}`)
    }

    return (
        <BorderCard>
            <div className="upper-container">
                <h2>{name}</h2>
            </div>
            <div className="lower-container">
                <h4>{title}</h4>
                <h4>{content}</h4>
                <button className="btn3" onClick={editPost}>Edit Post</button>
                <button className="btn3" onClick={onClick}>Delete</button>
            </div>
        </BorderCard>
    )
}

export default DisplayContent;