import React from "react";
import BorderCard from "../common/BorderCard";

const User = (props) => {

    const {id, name, status, birthday, location, about} = props.user;

    return (
        <BorderCard onClick={() => props.onSelect(id)}>
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{birthday}</p>
            <p>{location}</p>
            <p>{about}</p>
        </BorderCard>
    )
}

export default User;