import React from "react";
import { useState } from "react";
import "./Register.css"
import { Link } from "react-router-dom";
export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  const handleDelete=(email)=>{
    setUsers(users.filter((value) => value.email != email));
  };
  return (
    <div className="App-Register-Row">
      <div>
        <h2>Registration Form</h2>
        <p>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>
      <div>
        {
          users && users.map((value,index)=>(
            <li>{value.name}-{value.email}-{value.password}
            <button onClick={()=>handleDelete(value.email)}>delete</button></li>
          ))
        }
      </div>
    </div>
  );
}