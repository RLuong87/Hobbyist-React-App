import React, { useEffect, useState } from "react";
import SearchWeather from "./search/SearchWeather";
import CurrentWeather from "./current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from './search/WeatherAPI'

function WeatherFiveDay() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`)

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forescastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forescastResponse });
            })
            .catch((err) => console.log(err));
    }

    console.log(currentWeather);
    console.log(forecast);

    return (
        <div className="container">
            <SearchWeather onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}        </div>
    )
}

export default WeatherFiveDay;