import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import NavBarItems from "../NavBarItems/NavBarItems";

const NavBar = () => {
    const citysItems = useSelector(state=> Object.keys(state));

    const itemLinks = citysItems.map((name, index)=> (
        <NavBarItems key={index} name={name}/>
    ));

    return (
        <div className='navbar__wrapper'>
            {itemLinks}
        </div>
    );
};

export default NavBar;