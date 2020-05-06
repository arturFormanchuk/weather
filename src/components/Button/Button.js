import React, {Component} from 'react';
import './Button.css'

export const Button = (props) => {

  return (
    <a className={`positionButton`} onClick={props.onclick}>
      {props.darkMode? <i className="far fa-sun"/>: <i className="far fa-moon"/>}
    </a>
  );
}

