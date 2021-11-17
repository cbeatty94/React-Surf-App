import React, { useState } from 'react'

function WeatherData() {

    const api = {
        
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