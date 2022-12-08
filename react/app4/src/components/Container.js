import React from 'react'
import City from '../context/Weather';
import Weather from './CitySelect'
import "../App.css"


function Container() {

  return (
    <div className='container col-6'>
        <Weather/>

        <City/>
    </div>
  )
}

export default Container;