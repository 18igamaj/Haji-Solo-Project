import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h2>AVERAGE COST OF EXPENSES</h2>
      <ul>
      Two week stay in Mecca:
        <li>Flights Avg : $500 to $1500</li>
        <li>Transportation: $50 to $200</li>
        <li>Hotel/Lodge: $300 to $800</li>
        <li>Total Cost: $900 to $2500</li>
      </ul>
    </div>
  );
}

export default InfoPage;
