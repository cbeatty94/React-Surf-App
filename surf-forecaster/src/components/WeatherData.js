import React, { useState } from 'react'

function WeatherData() {

    const api = {
        key: 'f25ea385fe6239f2763725d805691c6f',
        url: 'https://api.openweathermap.org/data/2.5/onecall?'
    }
   
    // const [weather, setWeather] = useState();

    
    
    
    return (
        fetch(`${api.url}lat=32.715&lon=-117.161&exclude=minutely,alerts&units=imperial&appid=${api.key}`)
            .then(res=>res.json())
            .then(data => console.log(data))
        )
}

export default WeatherData