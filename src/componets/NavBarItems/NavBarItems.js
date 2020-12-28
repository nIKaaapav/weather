import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const NavBarItems = ({name}) => {
    const dispatch = useDispatch();

    const hendelClickForDeleteCity = ()=>{
        dispatch({type: 'DELETE_CITY', payload: name})
    };

    return (
        <li  data-city-name={name}>
            <span onClick={()=>hendelClickForDeleteCity()}>X</span>
            <Link to={`/${name.toLowerCase()}`}>{name.toUpperCase()}</Link>
        </li>
    );
};

export default NavBarItems;