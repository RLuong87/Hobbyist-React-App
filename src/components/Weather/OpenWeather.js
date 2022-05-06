import React, { useState } from "react";

function OpenWeather() {

    const apiKey = "d76c20b9d4dba9f9925bc410ca269444"
    const [query, setQuery] = useState('');
    const [weatherData, setWeather] = useState([{}]);

    const search = e => {
        if (e.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=${apiKey}`)
                .then(res => res.json())
                .then(data => {
                    setWeather(data);
                    setQuery('');
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${month} ${date} ${year}`
    }

    return (
        <div className={(typeof weatherData.main != "undefined") ? ((weatherData.main.temp > 79) ? "app warm" : "app") : "app"}>
            <div className="welcome">Enter a city to get the latest weather report</div>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weatherData.main != "undefined") ? (
                    < div >
                        <div className="location-box">
                            <div className="location">{weatherData.name}, {weatherData.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weatherData.main.temp)}°F
                            </div>
                            <div className="weather">{weatherData.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}
            </main >
        </div >
    );
}

export default OpenWeather;