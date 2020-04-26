import React, {Component} from 'react';
import './AddLocation.css'

export const AddLocation = (props) => {

  return (
    <div className='positionRightAdd'>
      {props.children}
      <form className='formAdd' onSubmit={props.addi}>
        <input  type="search" name={'city'} placeholder='Enter your city'/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

