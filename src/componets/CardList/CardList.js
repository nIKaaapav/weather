import React, {useEffect} from 'react';
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import actions from '../../redux/actions'

const CardList = () => {
    const cityItems = useSelector(state=> Object.keys(state));

    const cardListWeather = cityItems.map((el,i) => (<Card key={i} city={el}/>));

    return (
        <div className='card-list__wrapper'>
            {cardListWeather}
        </div>
    );
};

export default CardList;