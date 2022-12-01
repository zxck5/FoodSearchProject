import { useState, useEffect } from "react";

export default function CallApi() {
    //c8248d584fa89b4d0ad7e4db4382e6d0
    //https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
    const [weather, setWeather] = useState({});

    useEffect(() => {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=";
        
        fetch(url + "c8248d584fa89b4d0ad7e4db4382e6d0").then(x => x.json()).then((json) => {
            console.log(json);
            setWeather(json);
        });

    }, []);
    return <div>
       
        city : {weather.name}
        <br></br>
        country : {weather.sys.country}
        <br></br>
        timezone : {weather.timezone}
        <br></br>
        wind speed : {weather.wind.speed}
    </div>


}
