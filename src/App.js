import './App.css';
import React from 'react';
import Profile from './Profile/Profile';
import Button from './Profile/Button';

function App() {
  const fullName="Chebbi Mohamed Ali";
  const profession = "Developpeur Web « full stack »";
  const bio = "Je suis développeur web, je fais de la programmation back-end et front-end, et de la configuration et gestion de serveurs.";
  const handleName=(name)=>{
    alert(name)
  }
  
  
  return (
    <div className="App">
    <Profile 
    fullName={fullName} 
    bio={bio}
    profession={profession}/>
    <Button handleName={handleName} name="Mohamed Ali" />
    </div>
  );
}

export default App;
