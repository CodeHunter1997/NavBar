import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');                   //When the user will resfresh the page the theme will be saved to his changed theme
  const[theme, setTheme] = useState(current_theme? current_theme : 'light');     //if the current theme will be available in the local storage then it will add that value else if it is not there then light theme will be applied on the page

  useEffect(()=>{
localStorage.setItem('current_theme', theme);             //to set the value in local storage we used useEffect
  },[theme])                                              //whenever theme gets updated it will execute the function written in the use effect
  return (
    <div className = {`container ${theme}`}>
      <Navbar theme={theme} setTheme = {setTheme}/>
    </div>
  )
}

export default App