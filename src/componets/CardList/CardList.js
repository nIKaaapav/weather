import React, {useEffect} from 'react';
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";

const CardList = ({city}) => {
    const dispatch = useDispatch();
    const weather = useSelector(state=> state[city]);
    const item = city.split('')[0].toUpperCase()+city.slice(1);
    console.log(item);
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let hoursNow = new Date().getHours();
                switch (hoursNow % 3) {
                    case 0:
                        break;
                    case 1:
                        hoursNow=hoursNow+2;
                        break;
                    case 2:
                        hoursNow=hoursNow+1;
                        break;
                }
                if (hoursNow===24) hoursNow='00';
                let ourData =  data.list.filter(el => el.dt_txt.includes(`${hoursNow}:00:00`));
                dispatch({type: 'city', payload: {
                        city: city,
                        data: ourData
                }});
            });


    }, []);

    const cardListWeather = weather.map(el => (<Card key={el.dt} data={el}/>));

    return (
        <div className='card-list__wrapper'>
            {cardListWeather}
        </div>
    );
};

export default CardList;