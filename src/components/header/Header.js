import React, {Component} from 'react';
import './Header.css'

const Header = (props) => {

  return (
      <form className='form'  onSubmit={props.search}>
        <input className={props.mistake?'error':''}  type="search" name={'input'} placeholder='Enter your city'/>
        <button type="submit">Search</button>
      </form>
  );
}

export default Header;
