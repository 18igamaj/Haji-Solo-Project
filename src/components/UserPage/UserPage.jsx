import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import videoFx from '../asset/VectTwo.mp4'
import './UserPage.css'
import { Container } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <Container >
      <div>
      <video src={videoFx} autoPlay muted loop />
     {/* </video> className="container"*/}
     </div>
     <div className='userText'>
      <h2>WELCOME TO HAJI 🕋! {user.username}!!! </h2>
      <h4> Haji Phase #1 </h4>
      <h4> Is a savings app that allows us in helping you with save for Pilgrimage </h4>
      <h4> Let's start your journey to go to Mecca</h4>
      <p>Your ID is: {user.id}</p>
      </div>
      <LogOutButton className="btn" /> 
       
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
