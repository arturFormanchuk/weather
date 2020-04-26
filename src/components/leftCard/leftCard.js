import React, {Component} from 'react';
import './leftCard.css'

export const LeftCard = (props) => {

  return (
    <div>
      <div className='bodyLeft'>
        <div className='top'>
          <span><img className='img' src={`http://openweathermap.org/img/wn/${props.img.icon}@2x.png`} alt=""/></span>

        </div>
        <div className='bottom'>
          <p className='grades weight'>{Math.round(props.temp)}<span className='grades'>°С</span></p>
          <p className='weatherTitle'>{props.img.description}</p>
        </div>
      </div>
    </div>
  );

}

