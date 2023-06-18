import { useEffect, useState } from 'react';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

const App = () => {

const [usersList, setUsersList] = useState([]);
const [isButtonClicked, setIsButtonClicked] = useState(false)
 
useEffect(() => {
   isButtonClicked && 
   setTimeout(() => {
   fetchData();
   }, 2000);
 }, [isButtonClicked]);

const fetchData = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users?page=1");
        setUsersList(response.data.data);
    }catch (error) {
        console.log(error);
    }
};
const handleFetchData = () => {
    setIsButtonClicked(true);
};
console.log(usersList)
  return (
    <>
     <Navbar onFetchData={handleFetchData}/>
     {isButtonClicked && <Users usersList={usersList}/>}
    </>
  )
}

export default App
