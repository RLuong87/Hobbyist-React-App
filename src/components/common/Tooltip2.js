import React from "react";
import ReactTooltip from 'react-tooltip'
import FaWeather from "../Weather/WeatherIcon";

export default function WeatherText() {
    return (
        <div className="WeatherText">
            <button style={{ background: "transparent", border: "none", marginRight: 5}} data-tip data-for="weatherTip">
                <FaWeather />
            </button>

            <ReactTooltip id="weatherTip" place="bottom" effect="solid">
                Weather
            </ReactTooltip>
        </div>
    );
}