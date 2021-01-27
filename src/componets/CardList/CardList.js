import React, {useEffect} from 'react';
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import actions from '../../redux/actions';
import './CardList.scss'

const CardList = ({city}) => {
    const cityData = useSelector(state=> state.data);
    const locationUser = useSelector(state => state.locationUser);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.fetchDataAboutCityAsync(city, locationUser))
    }, []);

    const cardListWeather = cityData.map((data,i) => (<Card key={i} data={data}/>));

    return (
        <div className='card-list__wrapper'>
            {cardListWeather}
        </div>
    );
};

export default CardList;