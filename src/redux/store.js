import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


if (!localStorage['city']){
    localStorage.setItem('city', JSON.stringify([]));
}



let initialState  = {
    kiev: [],
    london: []
};

if(!!localStorage['city']){
    for (let city of JSON.parse(localStorage['city'])) {
        console.log(city);
        initialState[city] = [];
    }
}




const reduser= (state = initialState, action)=> {
    switch (action.type) {
        case 'city':
            const {city, data}= action.payload;
            return ({
                ...state,
                [city]: data,
            });
        case 'DELETE_CITY':
            const currentState = Object.fromEntries(Object.entries(state).filter(el => el[0] !== action.payload));
            return ({
                ...currentState
            });
        case 'ADD_NEW_CITY':
            localStorage['city'] = JSON.stringify([...Object.keys(state) ,action.payload]);
            return ({
                ...state,
                [action.payload]: [],
            });
        default:
            return state;
    }
};

export default createStore(
    reduser,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
