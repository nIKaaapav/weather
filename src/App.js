import './App.scss';
import React from 'react';
import NavBar from './componets/NavBar/NavBar'
import AppRouter from "./reuter/AppRouter";



function App() {

  return (
        <div className='app__wrapper'>
            <NavBar/>
            <AppRouter/>
        </div>
  );
}

export default App;
