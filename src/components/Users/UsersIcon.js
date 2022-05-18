import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const UsersIcon = () => {

    return (
        <div id="UsersIcon">
            <Link to="/users">
                <FontAwesomeIcon icon={["fas", "users"]} size="2x"/>
            </Link>
        </div>
    )
}

export default UsersIcon;