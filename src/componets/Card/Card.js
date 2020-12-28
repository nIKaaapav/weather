import React from 'react';

const Card = ({data}) => {
    const day =  new Date(data.dt*1000).toLocaleString('ru', {weekday: 'long'});

    return (
        <div className='card-list__item'>
            <p>{day}</p>
            <h3>{Math.round(data.main.temp)} °C</h3>
        </div>
    );
};

export default Card;