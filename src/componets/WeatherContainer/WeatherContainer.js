import React from 'react';
import CardList from "../CardList/CardList";

const WeatherContainer = ({city}) => {


    return (
        <div>
            <h1>{city.toUpperCase()}</h1>
            <CardList city={city}/>
        </div>
    );
};

export default WeatherContainer;