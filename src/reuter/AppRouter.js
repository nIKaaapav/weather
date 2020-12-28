import React from 'react';
import {Switch, Route} from 'react-router-dom'
import WeatherContainer from "../componets/WeatherContainer/WeatherContainer";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const citysItems = useSelector(state=> Object.keys(state));
    console.log(citysItems);
    const routeItems = citysItems.map((el, index)=>  <Route key={index} path={`/${el.toLowerCase()}`} render={()=><WeatherContainer city={el} />}/>);

    return (
        <Switch>
            {routeItems}
        </Switch>
    );
};

export default AppRouter;