import React, { useState  } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
    const[email, SetEmail]=useState("");
    const[name, setName]=useState("");
    const[password, SetPassword]=useState("");

  
    const navigate= useNavigate();
 
    const handleEmail =(event)=>{
      event.preventDefault();
    return SetEmail(event.target.value);
    }

    const handleName =(event)=>{
     event.preventDefault();
     return setName(event.target.value)
    }


    const handlePassword =(event)=>{
      event.preventDefault()
      return SetPassword(event.target.value);
    }

    const dispatch= useDispatch();

    const dataSubmit =()=>{
      console.log(name,email,password);
      dispatch(signupUser({email,name,password}));
      return navigate("/login");
    }
  return (
    <div>
      <h1>SignUp page</h1>
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
      <label htmlFor="exempleInputName">Name</label>
      <input 
      type="name" 
      placeholder="enter your name"
      required
      onChange={handleName}
      value={name}
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
        <button onClick={dataSubmit} type="submit">Submit</button>
      </div>
      
    </div>
  )
}

export default SignupPage
