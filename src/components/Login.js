import React from 'react';
import { useState } from 'react';
import { loginUser } from '../Redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[email, SetEmail]=useState("");
    const[password, SetPassword]=useState("");

    const navigate=useNavigate();
 
    const handleEmail =(event)=>{
      event.preventDefault();
    return SetEmail(event.target.value);
    }

    const handlePassword =(event)=>{
      event.preventDefault()
      return SetPassword(event.target.value);
    }


    const dispatch= useDispatch();

    const handleLogin =()=>{
        console.log(email, password);
        dispatch(loginUser({email, password}));

        return navigate("/home");
    }

  
  return (
    <div>
        <h1>Login System</h1>
      <div>
      <label htmlFor='exempleInputEmail'>Email</label>
      <input 
      type="email" 
      placeholder="enter email"
      required
      onChange={handleEmail}
      value={email}
      />
      </div>
      <div>
      <label htmlFor='exempleInputPassword'>Password</label>
      <input 
      type="password" 
      placeholder="enter password"
      required
      onChange={handlePassword}
      value={password}
      />
      </div>
      <div>
        <button onClick={handleLogin} type="submit">Login</button>
      </div>
      </div>
  )
}

export default Login
