import React from "react";
import ReactTooltip from 'react-tooltip'
import FaLink from "../faCommon/FaLink";

export default function HoverText() {
    return (
        <div className="HoverText">
            <button style={{ background: "transparent", border: "none" }} data-tip data-for="registerTip">
                <FaLink />
            </button>

            <ReactTooltip id="registerTip" place="bottom" effect="solid">
                Home
            </ReactTooltip>
        </div>
    );
}