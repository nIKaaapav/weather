import {combineReducers} from 'redux';


if (!localStorage['city']) {
    localStorage.setItem('city', JSON.stringify([]));
}

let initialState  = {
    'Kiev': []
};

if(!!localStorage['city']){
    for (let city of JSON.parse(localStorage['city'])) {
        initialState[city] = []
    }
}

// const fetchData = (state = initialState.data, action) => {
//     switch (action.type) {
//         case 'FETCH_DATA_':
//             const {city, data}= action.payload;
//             return ({
//                 ...state,
//                 [city]: data,
//             });
//         default:
//             return state
//
//     }
// };
//
// const deleteCity = (state = initialState.data, action) => {
//     switch (action.type) {
//         case 'DELETE_CITY':
//             const currentState = Object.fromEntries(Object.entries(state).filter(el => el[0] !== action.payload));
//             return ({
//                 ...currentState
//             });
//         default:
//             return state
//     }
// };
//
// const addNewCity = (state = initialState.data, action) => {
//     switch (action.type) {
//         case 'ADD_NEW_CITY':
//             localStorage['city'] = JSON.stringify([...Object.keys(state) ,action.payload]);
//             return ({
//                 ...state,
//                 [action.payload]: [],
//             });
//         default:
//             return state
//
//     }
// };
//
// const addLocationUser = (state = initialState.data, action) => {
//     switch (action.type) {
//         case 'ADD_CITY_LOCATION_USER':
//             const index = JSON.parse(localStorage['city']).indexOf(action.payload)
//             if (index>-1) return state;
//             return ({
//                 ...state,
//                 [action.payload]: [],
//             });
//         default:
//             return state
//     }
// };
//
//


const reduser = (state = initialState, action)=> {
    switch (action.type) {
        case 'FETCH_DATA':
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
        case 'ADD_CITY_LOCATION_USER':
            const index = JSON.parse(localStorage['city']).indexOf(action.payload)
            if (index>-1) return state;
            return ({
                ...state,
                [action.payload]: [],
            });
        default:
            return state;
    }
};

export default reduser;