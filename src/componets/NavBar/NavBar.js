import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/actions";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";

const NavBar = ({history}) => {
    const dispatch = useDispatch();
   const allCity = useSelector(state => state.allCity);
   const locationUser = useSelector(state => state.locationUser);

   const handleClickDeleteCity =(el) => {
       dispatch(actions.deleteCityActionsAsync(el,locationUser,history))
   };

   return (
        <ul className='navbar__wrapper'>
            {allCity.map((el, index)=> <>
                <Link to={`./${el.toLowerCase()}`} key={index}><li>{el.toUpperCase()}</li></Link><span onClick={()=>handleClickDeleteCity(el)} style={{color: 'red'}}>x</span>
            </>)}
            {
               <div>
                   <Link to={`./${locationUser.toLowerCase()}`} key='ewes'><li>{locationUser.toUpperCase()}</li> <span>location</span></Link>
               </div>
            }
        </ul>
   );
};

export default withRouter(NavBar);