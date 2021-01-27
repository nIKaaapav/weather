import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../redux/actions";
import { withRouter } from "react-router";


const SearchBar = ({history}) => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.errorMassage);
    const locationUser = useSelector(state => state.locationUser);


    const [cityValue, setCityValue] = useState('');

    const handleChangerInput = (e)=>{
        setCityValue(e.target.value);
    };

    const handleSubmitForSearchCity = (e)=> {
        e.preventDefault();
        dispatch(actions.searchNewCity(cityValue,locationUser, history));
        setCityValue('');
    };

    return (
        <>
        <form onSubmit={handleSubmitForSearchCity}>
            <input type="text" value={cityValue} onChange={handleChangerInput}/>
            <button>Search weather</button>
        </form>
            {!!error && <p>{error.message}</p>}
        </>
    );
};

export default withRouter(SearchBar);