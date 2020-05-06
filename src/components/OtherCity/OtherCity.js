import React, {Component, useContext} from 'react';
import './OtherCity.css'
import {DarkMode} from "../DarkModeWrapper/DarkModeWrapper";
// base: "stations"
// clouds: {all: 20}
// cod: 200
// coord: {lon: 24.03, lat: 49.84}
// dt: 1587810831
// id: 702550
// main:
//   feels_like: 11.29
// humidity: 39
// pressure: 999
// temp: 17
// temp_max: 17
// temp_min: 17
// __proto__: Object
// name: "Lviv"
// sys: {type: 1, id: 8909, country: "UA", sunrise: 1587784256, sunset: 1587835940}
// timezone: 10800
// visibility: 10000
// weather: Array(1)
// 0:
// description: "кілька хмар"
// icon: "02d"
// id: 801
// main: "Clouds"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// wind: {speed: 6, deg: 300}
// __proto__: Object

export const OtherCity = (props) => {
  const theme = useContext(DarkMode)
  return (
    <div className={theme.darkMode ? 'OtherDark Other' : 'Other'} >
      <div >
        <div className='absolute' onClick={props.delete}><i className="fas fa-times"/></div>
        <div className='otherTop' onClick={props.changeCity}>
          <div className='otherTopLeft'>
          <span>
            <img className='imgOne' src={`http://openweathermap.org/img/wn/${props.city.weather[0].icon}@2x.png`}
                 alt=""/>
          </span>
          </div>
          <div className={theme.darkMode ? 'otherTopCenterDark otherTopCenter' : 'otherTopCenter'}>
            <p><span>{Math.round(props.city.main.temp)}</span>°</p>
          </div>
          <div className={theme.darkMode ? 'otherTopRightDark otherTopRight' : 'otherTopRight'}>
            <div className='borderLeft'>
              <span>{props.city.name}</span>
              <p>{props.city.sys.country}</p>
            </div>
          </div>
        </div>
        <div className='otherBottom'>
          <div className='bottomLeft'>
            <span>Humidity: {props.city.main.humidity}%</span>
          </div>
          <div className='bottomLeft'>
            <span>Pressure: {props.city.main.pressure}</span>
          </div>
          <div className='bottomLeft'>
            <span>Wind: {props.city.wind.speed}m/s</span>
          </div>
        </div>
      </div>
    </div>
  );

}

