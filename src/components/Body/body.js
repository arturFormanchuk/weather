import React, {Component} from 'react';
import './body.css'

export const Body = (props) => {

  return (
    <div className='body'>
      {props.children}
    </div>
  );
}

export default Body;
