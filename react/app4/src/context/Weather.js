import axios from 'axios';
import "./weather.css"
import React, { useEffect, useState } from 'react'
import { useWeather } from './WeatherContext';

function City() {
    const {city,setCity,blueprint}=useWeather("ankara"); 
    const [weather,setWeather]=useState([]) 
   let count=0;
   let dayCount=0;
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
    
    useEffect(()=>{
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d4eba4bb3a2cd6ed0bb563ded94832da&cnt=40&units=metric`)
       .then((res)=>{
          setWeather(res.data);
          res.data.list.map(()=>{
            if(res.data.list[count].dt_txt.substring(11, 19) == res.data.list[0].dt_txt.substring(11, 19)){
            
              let obj={
              dt_txt:`${(res.data.list[count].dt_txt)}`,
              icon: `[{ icon : https://openweathermap.org/img/wn/${res.data.list[count].weather[0].icon}@2x.png}]`,
              temp_max:`${res.data.list[count].main.temp_max}`,
              temp_min:` ${res.data.list[count].main.temp_min}`,
              day: weekday[(d.getDay()+dayCount)%7]
            }          
            blueprint.push(obj);
            dayCount++;
          } 
          count++;})
        })
    },[city])

  return (
    <div className='whatever'>
      {blueprint.map((item,index) => (
       <div className='item' key={index}>
          
          <div>
            {item.day}
          </div>
          <img src={item.icon.substring(10,54)}/>

        <div>
          <span className='temp_max'>{Math.round(item.temp_max)} </span>
          <span className='temp_min'>{Math.round(item.temp_min)}</span>
        </div>

       </div>
  ))}


        

    </div>
  )
}

export default City;