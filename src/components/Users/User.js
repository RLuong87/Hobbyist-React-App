import React from "react";
import BorderCard from "../common/BorderCard";

const User = (props) => {

    const { id, avatar, name, status, birthday, location, about } = props.user;

    return (
        <BorderCard>
            <div className="upper-container">
                <div className="image-container4">
                    <img src={avatar} />
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h4>{status}</h4>
                <h4>{birthday}</h4>
                <h4>{location}</h4>
                <p>{about}</p>
                <button className="btn3" onClick={() => props.onSelect(id)}>Visit profile</button>
            </div>
        </BorderCard>
    )
}

export default User;