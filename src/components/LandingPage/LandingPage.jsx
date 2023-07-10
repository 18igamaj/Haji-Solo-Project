import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          
Welcome to Haji, the ultimate app for saving towards your Islamic Hajj journey. 
With Haji, you can create personalized budgets and goals, track your progress,
and stay on track as you save for this significant milestone in your life.
          </p>
          <p>
          We are also excited to announce that we are currently working on Haji Phase 2, 
          which will introduce new features and enhancements to further enhance your savings experience. 
          Stay tuned for updates and get ready to elevate your Hajj savings journey with Haji.
           Join us today and embark on the path towards fulfilling your spiritual aspirations.
          </p>
   
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
