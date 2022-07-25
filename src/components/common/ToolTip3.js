import React from "react";
import ReactTooltip from 'react-tooltip';
import UsersIcon from '../Users/UsersIcon';
import BorderCard from "./BorderCard";

export default function UsersText() {
    return (
        <div>                
            <button style={{ background: "transparent", border: "none" }} data-tip data-for="usersIcon">
                <UsersIcon />
            </button>
            
            <ReactTooltip id="usersIcon" place="bottom" effect="solid">
                View Users
            </ReactTooltip>
        </div>
    )
}