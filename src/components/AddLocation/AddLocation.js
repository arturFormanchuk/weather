import React, {Component, useContext} from 'react';
import './AddLocation.css'
import {DarkMode} from "../DarkModeWrapper/DarkModeWrapper";

export const AddLocation = (props) => {
  const theme = useContext(DarkMode)
  return (
    <div className={'positionRightAdd'}>
      {props.children}
      <form className={theme.darkMode?'posRightAddDark formAdd':'formAdd'} onSubmit={props.addi}>
        <input  type="search" name={'city'} placeholder='Enter your city'/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

