import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/actions";
import { withRouter } from "react-router";

const NavBar = ({history}) => {
    const inputCity = useRef(null);
    const dispatch = useDispatch();

    const handlerClickOnAddCity = (e)=>{
        e.preventDefault();
        dispatch(actions.addCityActionsAsinc(inputCity.current.value.toLowerCase(), history));
    };

    return (
        <div className='navbar__wrapper'>
            <form onSubmit={(e)=>handlerClickOnAddCity(e)}>
                <input ref={inputCity} type="text"/>
                <button>add city</button>
            </form>
        </div>
    );
};

export default withRouter(NavBar);