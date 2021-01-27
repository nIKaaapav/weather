import React from 'react';
import {days, months} from "../../utils/constants";
import SvgIcons from "../../svgIcons/SvgIcons";


const Card = ({data}) => {
    const {main: {temp_max, temp_min}, weather}= data;
    const {description,main} = weather[0];


    const thisDay = new Date(data.dt_txt.slice(0,10));

    return (
        <div className='card-list__item' >
            <p>{days[thisDay.getDay()]}</p>
            <p>{months[thisDay.getMonth()]} {thisDay.getDate()}</p>
            <p className="temp">Temp max: {Math.round(temp_max)}°C</p>
            <p className="temp">Temp min:{Math.round(temp_min)}°C</p>
            <SvgIcons weather={main.toLowerCase()}/>
            <p>{description}</p>
        </div>
    );
};

export default Card;