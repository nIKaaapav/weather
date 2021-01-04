import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../redux/actions";

const allDayArr= ['Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat', 'San'];
const allMonthArr= ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July'];

const CityCard = ({city}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state[city]);
    let month;
    let day;

    if (!!data[0]){
        console.log(data[0].dt_txt.slice(5,7));
        month = allMonthArr.find((el, i)=> i+1===+data[0].dt_txt.slice(5,7));
        day = allDayArr.find((el, i)=> i===+data[0].dt_txt.slice(8,10));
        console.log(month);
    }

    useEffect(()=>{
        dispatch(actions.fetchDataAboutCityOneAsync(city));
    },[]);

    return (
        <div>
            <div>
               <h3>{day}</h3>
                <p>{month}</p>
                <p>{data[0].temp}</p>
                <p>{data[0].temp_max}</p>
            </div>
        </div>
    );
};

export default CityCard;