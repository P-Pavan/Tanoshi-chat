import React from 'react'
import Add from '../img/addAvatar.png'

function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Tanoshi Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" id="file" style={{display:"none"}} />
                <lable htmlFor="file">
                    <img src={Add} alt="addAvatar" />
                    <span>Add an avatar</span>
                </lable>
                <button>Sign up</button>
            </form>
        <p>You do have an accout? Login</p>
        </div>
    </div>
  )
}

export default Register