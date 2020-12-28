import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState  = {
    kiev: [],
    london: []
};

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
