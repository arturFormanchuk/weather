import React, {Component, useContext} from 'react';
import './body.css'
import {DarkMode} from "../DarkModeWrapper/DarkModeWrapper";


export const Body = (props) => {
  const theme = useContext(DarkMode);
  return (
    <div className={theme.darkMode?'bodyDark body':'body'}>
      {props.children}
    </div>
  );
}

export default Body;
