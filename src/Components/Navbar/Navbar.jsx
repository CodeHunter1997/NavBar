import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'                //importing all my icons from the assets folder
import logo_dark from '../../assets/logo-white.png'
import seacrh_icon_light from '../../assets/search-w.png'
import seacrh_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'


//using useState to create a function to switch between dark and light theme
const Navbar = ({theme, setTheme}) => {  
const toggle_mode =()=>{    
    theme == 'light' ? setTheme('dark') : setTheme('light');
}   //initial theme color will be light and then we added some condition to change it dark if the light is not selected        

//below you can see we have replaced all the light items with dark items by using the above condition
    return (
        <div className='navbar'> 
         <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />   
         <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
         </ul>
         <div className="search-box">
            <input type="text" placeholder='Search'/>                                                   
            <img src={theme == 'light' ? seacrh_icon_light : seacrh_icon_dark} alt="" />
         </div>
         <img onClick = {()=>{toggle_mode()}}src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />   
        </div>                         //we applied the condition to change all the icons within the toggle icon
    )
}

export default Navbar