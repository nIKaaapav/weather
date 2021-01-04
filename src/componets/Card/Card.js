import React , {useEffect}from 'react';
import { withRouter } from "react-router";
import actions from "../../redux/actions";
import {useDispatch, useSelector} from 'react-redux';


const Card = ({city, history}) => {
    const dispatch = useDispatch();
    const weather = useSelector(state => state[city]);

    useEffect(()=>{
            dispatch(actions.fetchDataAboutCityAsync(city, history));
    }, []);

    const handleClickForDeleteCity = ()=>{
        dispatch(actions.deleteCityActionsAsync(city, history));
    };

    const handleClickOnCard = (e)=>{
        console.log(e.target.dataset);
        if (e.target.dataset.delete==='true') return;
        history.push(`/${city}`)
    };

    return (
        <div className='card-list__item' onClick={(e)=>handleClickOnCard(e)}>
            <span data-delete='true' onClick={()=> handleClickForDeleteCity()}>X</span>
            <p>{city}</p>
           {!!weather[0] && <h3>{Math.round(weather[0].main.temp)} °C</h3>}
        </div>
    );
};

export default withRouter(Card);