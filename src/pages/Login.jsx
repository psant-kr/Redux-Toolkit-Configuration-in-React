import React, { useState } from 'react';
import { login, logout } from "../store";
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <>
      <h1> THIS IS THE LOGIN PAGE</h1>
      <h2>{username}</h2>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(login({ username: newUsername }))
        }}
      >SUBMIT Login</button>
      <button
        onClick={() => dispatch(logout())}
      >Logout</button>
    </>
  )
}

export default Login