import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {WeatherContainer, City, Temp} from './WeatherStyles'



const Weather = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=grottaferrata&units=metric&appid=dfbf13fda24290182b44776baceecbf3";
    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get(url).then((response) =>{
            setData(response.data);
            
           
        }).catch((error) =>{
            console.log(error)
        })
    },[url])

    console.log(data)
if(!data) return null;


  return (<WeatherContainer>
    <Temp>{(data.main.temp_min).toFixed(0)}&#176;</Temp>
    <City>Rome,IT</City>
    </WeatherContainer>
  )
}

export default Weather