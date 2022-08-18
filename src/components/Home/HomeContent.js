import React, { useState } from "react";
import moment from "moment";
import User from "../Users/User";
import { Link, useNavigate } from "react-router-dom";

const HomeContent = (props) => {

    let navigate = useNavigate();

    const { angler: { id, avatar, name }, localDateTime, content, picture } = props.contents;
    // console.log(props.centents);

    const onSelect = (userId) => {
        navigate(`/users/${userId}`)
        // console.log(userId);
    }

    return (
        <div className="align-content">
            <div className="Content-card">
                <div className="upper-container">
                    <h3>{name}</h3>
                    <p>{moment(localDateTime).format('MMMM Do YYYY, h:mm a')}</p>
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={() => (onSelect(id))} className="image-container2">
                        <img src={avatar} />
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