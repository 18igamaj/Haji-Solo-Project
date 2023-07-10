import React from 'react';
import './Footer.css';



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer>&copy; HAJI INC by <a href={'http://linkedin.com/in/majid-igale-9a9873188'}>Majid Igale</a> </footer>;
}

export default Footer;
