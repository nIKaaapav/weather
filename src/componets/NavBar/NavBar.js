import React, {useRef} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import NavBarItems from "../NavBarItems/NavBarItems";

const NavBar = () => {
    const citysItems = useSelector(state=> Object.keys(state));
    const inputCity = useRef(null);
    const dispatch = useDispatch();

    const itemLinks = citysItems.map((name, index)=> (
        <NavBarItems key={index} name={name}/>
    ));

    const handlerClickOnAddCity = (e)=>{
        e.preventDefault();
        dispatch({type: 'ADD_NEW_CITY', payload: inputCity.current.value.toLowerCase()});
    };

    return (
        <div className='navbar__wrapper'>
            <form onSubmit={(e)=>handlerClickOnAddCity(e)}>
                <input ref={inputCity} type="text"/>
                <button>add city</button>
            </form>
            {itemLinks}
        </div>
    );
};

export default NavBar;