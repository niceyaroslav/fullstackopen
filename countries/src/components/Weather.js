import React from "react"

const Weather = ({data}) => {

    return (
        <>
            <p><strong>Weather in {data.location.name}</strong></p><br/>
            <p>temperature: {data.current.temp_c}</p>
            <img src={data.current.condition.icon} alt="icon" style={{height:"100px"}}/>
            <p>wind: {data.current.wind_kph} kph, {data.current.wind_dir}</p>
        </>
    )
}

export default Weather;