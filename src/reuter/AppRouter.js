import React from 'react';
import {Switch, Route} from 'react-router-dom'
import WeatherContainer from "../componets/WeatherContainer/WeatherContainer";
import {useSelector} from "react-redux";


const AppRouter = () => {
    const allCity = useSelector(state=> state.allCity);
    const locationUser = useSelector(state => state.locationUser);
    const routeItems = [...allCity,locationUser].map((el, index)=>  <Route exact key={index} path={`/${el.toLowerCase()}`} render={()=><WeatherContainer city={el} />}/>);


    return (
        <Switch>
            <Route exact path='/' render={()=> <h1>chaise city</h1>}/>
            {routeItems}
        </Switch>
    );
};

export default AppRouter;