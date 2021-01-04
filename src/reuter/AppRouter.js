import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import WeatherContainer from "../componets/WeatherContainer/WeatherContainer";
import {useDispatch, useSelector} from "react-redux";
import ErorrCity from "../componets/ErrorPage/ErorrCity";
import actions from "../redux/actions";
import CardList from "../componets/CardList/CardList";


const AppRouter = () => {

    const citysItems = useSelector(state=> Object.keys(state));
    const routeItems = citysItems.map((el, index)=>  <Route exact key={index} path={`/${el.toLowerCase()}`} render={()=><WeatherContainer city={el} />}/>);

    return (
        <Switch>
            <Route exact path={'/'} render={()=> <CardList/>}/>
            {routeItems}
            <Route path={'/*'} component={ErorrCity}/>
        </Switch>
    );
};

export default AppRouter;