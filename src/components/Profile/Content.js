import React from "react";
import BorderCard from "../common/BorderCard";
import { useNavigate } from 'react-router-dom';

const DisplayContent = (props) => {

    const { angler: { name }, id, localDateTime, content } = props.contents;
    let navigate = useNavigate();

    const onClick = () => {
        navigate(`/delete/${id}`)
    }

    const editPost = () => {
        navigate(`/update/${id}`)
    }

    return (
        <BorderCard style={{
            width: 500
        }}>
            <div className="upper-container2">
                <p>{localDateTime}</p>
                <h2>{name}</h2>
            </div>
            <div className="lower-container">
                <h4>{content}</h4>
                <button className="btn3" onClick={editPost}>Edit Post</button>
                <button className="btn3" onClick={onClick}>Delete</button>
            </div>
        </BorderCard>
    )
}

export default DisplayContent;