import React, {useEffect} from 'react';
import Card from "../Card/Card";
import { withRouter } from "react-router";
import {useDispatch, useSelector} from "react-redux";

const CardList = ({ history ,city}) => {
    const dispatch = useDispatch();
    const weather = useSelector(state=> state[city]);
    const item = city.split('')[0].toUpperCase()+city.slice(1);
    console.log(item);
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`)
            .then(res => res.json())
            .then(data => {
                if (data.cod ==='200'){
                    let ourData =  data.list.filter(el => el.dt_txt.includes(`15:00:00`));
                    dispatch({type: 'city', payload: {
                            city: city,
                            data: ourData
                        }});
                } else {
                    history.push('./error')
                }

            });

    }, []);

    const cardListWeather = weather.map(el => (<Card key={el.dt} data={el}/>));

    return (
        <div className='card-list__wrapper'>
            {cardListWeather}
        </div>
    );
};

export default withRouter(CardList);