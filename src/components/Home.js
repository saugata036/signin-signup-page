import React, { useState } from 'react'
import { profilePage, logout } from '../Redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
 const navigate= useNavigate();
  const dispatch = useDispatch();

 
  dispatch(profilePage({name, email}))
  const logoutHandler=()=>{
      logout(navigate('/SignupPage'));
  }

  return (
    <div>
      <h1>Thank You <span>{name}To visite Our Website</span></h1>
      <h2>Our Team Will Contact You At This<span >{email} email ID</span></h2>

      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  )
}


export default Home
