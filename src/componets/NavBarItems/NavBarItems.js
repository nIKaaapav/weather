import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { withRouter } from "react-router";
import actions from "../../redux/actions";


const NavBarItems = ({history, name}) => {
    const dispatch = useDispatch();

    const hendelClickForDeleteCity = ()=>{
        dispatch(actions.deleteCityActionsAsync(name, history));
    };

    return (
        <li  data-city-name={name}>
            <span onClick={()=>hendelClickForDeleteCity()}>X</span>
            <Link to={`/${name.toLowerCase()}`}>{name.toUpperCase()}</Link>
        </li>
    );
};

export default withRouter(NavBarItems);