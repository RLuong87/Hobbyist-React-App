import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°F</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Air Quality</span>
                        <span className="parameter-value">47</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">9 mph</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">65%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Visibity</span>
                        <span className="parameter-value">9.9 mi</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;