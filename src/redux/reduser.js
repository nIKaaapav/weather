
if (!localStorage['city']) {
    localStorage.setItem('city', JSON.stringify([]));
}


const initialState = {
    currentRoute: '/',
    showSpinner: false,
    currentCityValue: '',
    locationUser: '',
    allCity: (!!localStorage.getItem('city') ? JSON.parse(localStorage['city']) : []),
    data: [],
    errorMassage: null,
};


const reduser = (state = initialState, action)=> {
    switch (action.type) {
        case 'ADD_GEOLOCATION':
            console.log(action.payload);
            return {
                ...state,
                locationUser: action.payload
            };
        case 'FETCH_DATA':
            const {data, city} = action.payload;
                return ({
                    ...state,
                    currentCityValue: city,
                    data: data,
                });
        case 'ERROR_DATA':
            return ({
                ...state,
                errorMassage: action.payload
            });
        case 'DELETE_CITY':
            const currentState = state.allCity.filter(el => el !== action.payload);
            return ({
                ...state,
                allCity: [...currentState]
            });
        case 'ADD_NEW_CITY':
            let cityIndex = state.allCity.findIndex(el => el.toLowerCase()===action.payload.toLowerCase());
            if (cityIndex >-1 ){
                return ({
                    ...state,
                    allCity: [...state.allCity]
                });
            }
            return ({
                ...state,
                allCity: [...state.allCity, action.payload.toLowerCase()],
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