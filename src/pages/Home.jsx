import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store';

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  return (
    <>
      <h1>Home Page</h1>
      <h2>{username}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  )
}

export default Home