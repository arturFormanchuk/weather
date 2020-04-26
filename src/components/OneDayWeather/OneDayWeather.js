import React from 'react';
import './OneDayWeather.css';

const OneDayWeather = (props) => {
  const date = new Date(props.day.dt*1000).toString().split(' ');
  return (
    <div className='positionOne' onClick={props.onclick}>
          <div key={props.day.dt} className={props.index === 7 ? 'block' : 'bodyOne'}>
            <div className="leftOne">
            <span>
              <img className='imgOne' src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt=""/>
            </span>
            </div>
            <div className="centerOne">
              <div><span>{date[0]}</span></div>
              <div><p>{props.day.weather[0].description}</p></div>
            </div>
            <div className={props.isActive===props.day.dt? 'activeColor rightOne' : 'rightOne'}>
              <p><span>{Math.round(props.day.temp.day)}</span>° / <span>{Math.round(props.day.temp.min)}</span>°</p>

            </div>
          </div>
    </div>
  );
};


export default OneDayWeather;
