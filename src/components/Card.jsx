import React from 'react'
import { WiStrongWind } from "react-icons/wi";
import Clock from 'react-live-clock';

const Card = ({data}) => {
    if (JSON.stringify(data)!=='{}') {
      return (
        <div>
            <div className=' d-flex flex-column align-items-center gap-2'>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Us/Pacific'} />
            {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={`${data.sys.country}/${data.name}`} /> */}
                <h4>{data.name}, {data.sys.country}</h4>
                <h4 className=' text-capitalize'>{data.weather[0].description}</h4>
                <h2><img src={`https://openweathermap.org//img/w/${data.weather[0].icon}.png`} alt="" />{(data.main.temp-273.00).toFixed(2)}°C</h2>
                <p><WiStrongWind/>{data.wind.speed}m/s</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Visibility: {data.visibility/1000}km</p>
            </div>
        </div>
      )
    }else{
      return(
        <div>
          <h1 className='text-center'>Loading..........</h1>
        </div>
      )
    }
}

export default Card

