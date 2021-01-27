import './App.scss';
import React, {useEffect} from 'react';
import NavBar from './componets/NavBar/NavBar'
import AppRouter from "./reuter/AppRouter";
import {useDispatch} from "react-redux";
import actions from "./redux/actions";
import SearchBar from './componets/SearchBar'



const App = ()=>  {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.addLocationOnNavigator())
    }, []);

  return (
        <div className='app__wrapper'>
            <NavBar/>
            <SearchBar/>
            <AppRouter/>
        </div>
  );
}

export default App;
