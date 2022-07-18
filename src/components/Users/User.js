import React from "react";
import { Link } from "react-router-dom";
import BorderCard from "../common/BorderCard";

const User = (props) => {

    const { id, name, status, birthday, location, about } = props.user;

    return (
        <BorderCard>
            <div className="upper-container">
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <h4>{status}</h4>
                <h4>{birthday}</h4>
                <h4>{location}</h4>
                <p>{about}</p>
                <Link to="/">
                    <button className="btn3" onClick={() => props.onSelect(id)}>Visit profile</button>
                </Link>
            </div>
        </BorderCard>
    )
}

export default User;