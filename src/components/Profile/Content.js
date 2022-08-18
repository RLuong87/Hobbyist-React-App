import React from "react";
import BorderCard from "../common/BorderCard";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const DisplayContent = (props) => {

    const { angler: { avatar, name }, id, localDateTime, content, picture } = props.contents;

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
            <div className="upper-container">
                <h2>{name}</h2>
                <p>{moment(localDateTime).format('MMMM D YYYY, h:mm a')}</p>
                <div className="image-container2">
                    <img src={avatar} />
                </div>
            </div>
            <div className="lower-container">
                <h4>{content}</h4>
                <div className="image-container3">
                    <img src={picture} />
                </div>
            </div>
            <button className="btn3" onClick={editPost}>Edit Post</button>
            <button className="btn3" onClick={onClick}>Delete</button>
        </BorderCard>
    )
}

export default DisplayContent;