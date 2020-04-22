import React, {Component} from 'react';
import './mainWeatherCard.css';
import img from './img.png'

export const MainWeatherCard = (props) => {

  return (
    <div className='card'>
      <div className='opacity'>
        <div className='info'>
          <p className='city'><i className="fas color fa-map-marker-alt"/> {props.weather.name}</p>
          <p className='country'>City in {props.country}</p>
        </div>

        <img className='worldMap' src={img} alt=""/>
      </div>
    </div>
  );

}

