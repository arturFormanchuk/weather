import React, {Component, createContext, useState, useEffect} from 'react';

export const DarkMode = createContext();

 export const DarkModeWrapper = (props) => {

const [darkTheme, setDark]= useState(false);

  const changeTheme =()=>{
    localStorage.setItem('darkTheme',!darkTheme);
    setDark(!darkTheme);
  };

   useEffect(() => {
     if (window.localStorage.length) {
        setDark(JSON.parse(localStorage.getItem('darkTheme')));
     }
   }, []);

  return (
    <DarkMode.Provider value={{
      darkMode: darkTheme,
      changeTheme: changeTheme
    }}>
      {props.children}
    </DarkMode.Provider>
  )
};



