import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navebar = () => {

  const NaveLinkStyle = ({isActive})=>{
    return {
      textDecoration: isActive ? "none" : "underline",
      color : isActive ? "red"  :  "white",
      fontSize: "25px"
    };
  };

  return (
    <div className='header'>
       <h1>WebPage</h1>
       <NavLink to={"/login"} style={NaveLinkStyle}>Login</NavLink>
       <NavLink to={"/SignupPage"} style={NaveLinkStyle}>SignupPage</NavLink>
       <NavLink to={"/home"} style={NaveLinkStyle}>Home</NavLink>
       <NavLink to={"/notification"} style={NaveLinkStyle}>Notification</NavLink>
    </div>
  )
}

export default Navebar
