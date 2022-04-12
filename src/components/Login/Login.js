import React from 'react'
import './Login.css'

function Login() {
  return (
    <div style={{ background: 'no repeat', backgroundImage: `url(/img/login.jpg)` }}className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
        </div>
  )
}

export default Login