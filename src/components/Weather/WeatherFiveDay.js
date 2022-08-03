import React, { useEffect, useState } from "react";
import BorderCard from "../common/BorderCard";

function WeatherFiveDay() {

    const apiKey = "d76c20b9d4dba9f9925bc410ca269444"
    const [weather, setWeather] = useState([{}]);

    const getForecast = (e) => {
        fetch('https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus', weather)
            .then(response => response.json())
            .then(data => {
                setWeather(data);
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    // useEffect = () => {
    //     getForecast()
    // }

    return (
        <BorderCard>
            <div>
                {/* {typeof weather.main != "undefined" ?
                    <p>Loading...</p> :
                } */}
            </div>
        </BorderCard>
    )
}

export default WeatherFiveDay;