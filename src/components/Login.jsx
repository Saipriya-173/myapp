
import React from 'react';
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
        <h2>Login Form</h2>
        <p>
            <input type="text" placeholder="email address"></input>
            <input type="password" placeholder="password"></input>
        </p>
        <p>
            <button>Login</button>
        </p>
        <p>
            <Link to="../register">New User Register Here!</Link>
        </p>
        </div>
  );
}

