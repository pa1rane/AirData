import { useState } from 'react';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';

const App = () => {

const [usersList, setUsersList] = useState([])

  return (
    <>
     <Navbar />
     <Users usersList={usersList}/>
    </>
  )
}

export default App
