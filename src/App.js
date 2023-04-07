import "./App.css";
import React, { useState } from "react";

function App() {
    const [cityName, setCityName] = useState("");
    const [apiData, setApiData] = useState({});

    const apiKey = "4d5dcffae85f1cb3c76cee23eb096851";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const fetchData = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setApiData(data));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        fetchData();
        setCityName("");
    };

    const cityInputHandler = (e) => {
        setCityName(e.target.value);
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <form onSubmit={submitHandler}>
                <input
                    name="cityInput"
                    type="text"
                    onChange={cityInputHandler}
                    value={cityName}
                    placeholder="City Name..."
                ></input>
                <input type="submit"></input>
            </form>

            <div>
                {apiData.main && (
                    <div className="weather__list">
                        <div>
                            <h3>Status: </h3>
                            <p> {apiData.weather[0].main}</p>
                        </div>

                        <div>
                            <h3>Description: </h3>{" "}
                            <p> {apiData.weather[0].description}</p>
                        </div>
                        <div>
                            <h3>Min Temp: </h3>{" "}
                            <p> {apiData.main.temp_min}°C</p>
                        </div>
                        <div>
                            <h3>Max Temp: </h3>{" "}
                            <p> {apiData.main.temp_max}°C</p>
                        </div>
                        <img
                            src={`https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
                        ></img>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
