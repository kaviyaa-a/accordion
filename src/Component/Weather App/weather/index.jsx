import {useState,useEffect} from 'react'
import Search from "../search";



export default function Weather() {
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(false);
const [weatherData, setWeatherData] = useState(null);

async function fetchWeatherData(param) {
    setLoading(true);
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=fc457299c7bf90c4ba4aaca7f69517b6`
    );

    const data = await response.json();
    if(data) {
       setWeatherData(data);
       setLoading(false);
    }
} catch (e) {
    setLoading(false);
    console.log(e);
}
}

async function handleSearch() {
fetchWeatherData(search)
}

function getCurrentData(){
    return new Date().toLocaleDateString('en-us', {
        weekday:'long',
        month:'long',
        day:'numeric',
        year:'numeric'
    });
}

useEffect(() => {
    fetchWeatherData("America")
},[]);

console.log(weatherData);

    return <div>
        <Search 
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}/>

        {loading ? (<div className="loading">Loading...</div> ) : (
        <div className="weather-app">
        <div className='city-name'>
            <h1>{weatherData?.name} <span>{weatherData?.sys?.country}</span></h1>
            </div>
            <div className='date'>
                <span>{getCurrentData()}</span>
            </div>
            <div className="temp">{weatherData?.main?.temp}</div>
            <p className='description'>
                {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
            </p>
            <div className='weather-info'>
                <div  className="column">
                    <div >
                    <p className='wind'>{weatherData?.wind?.speed}</p>
                    <p className="para">Wind Speed</p>
                    </div>
                </div>
                <div className="column">
                    <div >
                    <p className='humidity'>{weatherData?.main?.humidity}%</p>
                    <p className="para">Humidity</p>
                    </div>
                </div>
            </div>
            </div>
            )}
        </div>
}