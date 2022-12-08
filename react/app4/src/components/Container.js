import React from 'react'
import City from '../context/Weather';
import { useWeather } from '../context/WeatherContext'
import Weather from './CitySelect'
import "../App.css"


function Container() {
    const {city}=useWeather();
  return (
    <div className='container col-6'>
        <Weather/>

        <City/>
    </div>
  )
}

export default Container;