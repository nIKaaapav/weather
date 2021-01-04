import React from 'react';
import CardList from "../CardList/CardList";
import CityCard from "../CityCard";

const WeatherContainer = ({city}) => {


    return (
        <div>
            <h1>{city.toUpperCase()}</h1>
            <CityCard city={city}/>
            {/*<CardList city={city}/>*/}
        </div>
    );
};

export default WeatherContainer;