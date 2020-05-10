import React from 'react';
import profileImage from './sourceImages/r88088.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App Deploy in GitHub</h1>
      <div><label>Aurthor:</label>Mussarath Sheriff</div>
      <img className="img-responsive img-thumbnail" src={profileImage} alt="profile" />
    </div>
  );
}

export default App;
