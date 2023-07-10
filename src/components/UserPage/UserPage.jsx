import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import videoFx from '../asset/VectTwo.mp4'
import './UserPage.css'
// import { Container } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="overlay">
    <div className="container">
      <div>
      <video src={videoFx} autoPlay muted loop />
     {/* </video> */}
     </div>

     <div className='userText'>
      <h2>WELCOME TO HAJI 🕋 {user.username} </h2>
      <br></br>
      <h4> Let's start your saving journey to go to Mecca</h4>
      <p> Haji Phase #1 </p>
      </div>
      <LogOutButton className="btn" /> 
       
    </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
