import React, {Component, useContext} from 'react';
import './Header.css'
import {DarkMode} from "../DarkModeWrapper/DarkModeWrapper";

const Header = (props) => {
  const theme = useContext(DarkMode)
  return (
      <form className={theme.darkMode?'formDark form':'form'}  onSubmit={props.search}>
        <input className={props.mistake?'error':''}  type="search" name={'input'} placeholder='Enter your city'/>
        <button type="submit">Search</button>
      </form>
  );
}

export default Header;
