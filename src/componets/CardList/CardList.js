import React, {useEffect} from 'react';
import Card from "../Card/Card";
import { withRouter } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import actions from '../../redux/actions'

const CardList = ({ history ,city}) => {
    const dispatch = useDispatch();
    const weather = useSelector(state=> state[city]);

    useEffect(()=>{
        dispatch(actions.fetchDataAboutCityAsync(city, history))
    }, []);

    const cardListWeather = weather.map(el => (<Card key={el.dt} data={el}/>));

    return (
        <div className='card-list__wrapper'>
            {cardListWeather}
        </div>
    );
};

export default withRouter(CardList);