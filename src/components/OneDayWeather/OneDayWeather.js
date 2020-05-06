import React, {useContext} from 'react';
import './OneDayWeather.css';
import {DarkMode} from "../DarkModeWrapper/DarkModeWrapper";

const OneDayWeather = (props) => {
  const theme = useContext(DarkMode);
  const date = new Date(props.day.dt*1000).toString().split(' ');
  return (
    <div className='positionOne' onClick={props.onclick}>
          <div key={props.day.dt} className={`${theme.darkMode?'bodyOneDark':'bodyOne'}`}>
            <div className="leftOne">
            <span>
              <img className='imgOne' src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt=""/>
            </span>
            </div>
            <div className={theme.darkMode?'centerOneDark centerOne ':'centerOne'}>
              <div><span>{date[0]}</span></div>
              <div><p>{props.day.weather[0].description}</p></div>
            </div>
            <div className={`${props.isActive===props.day.dt? `activeColor ${theme.darkMode?'rightOneDark':''} rightOne `  : `rightOne ${theme.darkMode?'rightOneDark':''}`}`}>
              <p><span>{Math.round(props.day.temp.day)}</span>° / <span>{Math.round(props.day.temp.min)}</span>°</p>

            </div>
          </div>
    </div>
  );
};


export default OneDayWeather;
