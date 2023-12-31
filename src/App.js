import { useEffect, useState, useRef} from 'react';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import Users from './components/users/Users';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";

const App = () => {

const [usersList, setUsersList] = useState([]);
const [isButtonClicked, setIsButtonClicked] = useState(false);
const [loading, setLoading] = useState(false);
 
useEffect(() => {
   isButtonClicked && 
   setTimeout(() => {
   fetchData();
   }, 3000);
 }, [isButtonClicked]);

const fetchData = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users?page=1");
        setUsersList(response.data.data);
    } catch (error) {
        console.log(error);
    }
};
const handleFetchData = () => {
    setIsButtonClicked(true);
    setLoading(true)
    setTimeout(() =>{
     setLoading(false)
    }, 3000)
};
console.log(usersList)
  return (
    <>
     <Navbar onFetchData={handleFetchData} clicked={isButtonClicked}/>
     <div className="container">
     {isButtonClicked ? <Users usersList={usersList}/> : <Home />}
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
        <HashLoader
          color="#a697ce"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      </div>
    </>
  )
}

export default App
