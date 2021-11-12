import React, { useState } from 'react';
import './signup.module.css'

const Signup = ({ handleClose }) => {
  // create state variables for each input
  const [userName, setUserName] = useState('');
  //const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [formData,setFormData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userName, email, phoneNo);
    setFormData([...formData])
    
  };

  return (
    <div>
      <div id="main">
          <div>
            <h2>Sign Up</h2>
            <h3>Create  an account to continue</h3>
          </div>
         
          <div id = "img-box">
            <img src = "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" alt = "Icon 1"/>
           </div>
          
          <div className = "img-box">
            <img src = "https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png" alt = "Icon 2"/>
          </div>
          
        <form  onSubmit={handleSubmit}>
        <input
            label="Enter Name"
            placeholder="Enter Name"
            required
            value={userName}
            onChange={e => setUserName(e.target.value)}
        />
        <br/>
        <input
            label="Email"
            placeholder="Enter Email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <input
            label="Mobile Number"
            placeholder="Mobile Number"
            type="Number"
            required
            value={phoneNo}
            onChange={e => setPhoneNo(e.target.value)}
        />
        <p>By clicking on Sign Up, you agree to Fernway’s Terms of use</p>
        <div>
            <button type="submit">
            Sign Up
            </button>
        </div>
        <p>Already a member? 
            <span>Sign In</span></p>
        </form>
    </div>
    </div>
  );
};

export {Signup}