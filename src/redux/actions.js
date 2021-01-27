
const addCityUserActions = (data) => ({type: 'ADD_CITY_LOCATION_USER', payload:  data});

const deleteCityActions = (city) => ({type: 'DELETE_CITY', payload: city});

const addCityActions = (city) => ({type: 'ADD_NEW_CITY', payload: city});

const fetchDataWeatherActions = (city,ourData) => ({type: 'FETCH_DATA', payload: {
        city: city,
        data: ourData
    }});

const addGeolocationUser = (city)=> ({
    type: 'ADD_GEOLOCATION',
    payload: city
});

 const addCityActionsAsinc = (city, history)=> dispatch => {
     history.push(`/${city}`);
     dispatch(addCityActions(city));
 };

const deleteCityActionsAsync = (city,locationUser, history) => dispatch => {
    const currentState = JSON.parse(localStorage['city']).filter(el => el!==city);
    localStorage['city'] = JSON.stringify(currentState);

    if(JSON.parse(localStorage['city']).length === 0)  {
        history.push(`/`);
        dispatch(deleteCityActions(city));
        return
    };
    history.push(`/${currentState[0]}`);
    dispatch(deleteCityActions(city));
};

export const addLocationOnNavigator = () => dispatch => {

    const success = (position) =>  {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b`)
            .then(res => res.json())
            .then(data => {
                if(+data.cod === 200) {
                    dispatch(addGeolocationUser(data.name))
                } else {
                    console.log('position no defined!!!');
                }
            })
    };

    // dispatch(addGeolocationUser('odessa'));

    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
        navigator.geolocation.getCurrentPosition(success);
    }

    else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
};

const searchNewCity = (city,locationUser, history) => dispatch => {

    dispatch(fetchDataAboutCityAsync(city,locationUser, history));
};

const fetchDataAboutCityAsync = (city, locationUser, history) => dispatch => {
    let serchCity = JSON.parse(localStorage['city']);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.toLowerCase()}&lang=ru&units=metric&APPID=b1b35bba8b434a28a0be2a3e1071ae5b`)
        .then(res => res.json())
        .then(data => {
            if (data.cod ==='200'){
                let dateHoursNow = new Date().getHours();
                switch (+dateHoursNow % 3) {
                    case 1:
                        dateHoursNow = dateHoursNow + 2;
                        break;
                    case 2:
                        dateHoursNow = dateHoursNow + 1;
                    case 0:
                        break;
                }

                let currentData =  data.list.filter(el => el.dt_txt.includes(`${dateHoursNow}:00:00`));
                dispatch(erorrFetchData(''));
                dispatch(addCityActions(city));
                dispatch(fetchDataWeatherActions(city, currentData));

                const index = serchCity.find((el)=> el.toLowerCase()===city.toLowerCase());
                !!history && history.push(`/${city.toLowerCase()}`);
                if (!!index || locationUser===city) return;

                localStorage['city'] = JSON.stringify([...serchCity, city.toLowerCase()]);

                return true
            }
            if (data.cod ==='404') {
                dispatch(erorrFetchData(data))
            }

        });
};

const erorrFetchData =(err)=>({
    type: 'ERROR_DATA',
    payload: err,
})

const fetchDataAboutCityOneAsync = (city) => dispatch => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.toLowerCase()}&lang=ru&units=metric&APPID=b1b35bba8b434a28a0be2a3e1071ae5b`)
        .then(res => res.json())
        .then(data => {
            if (data.cod ==='200'){
                let currentData =  data.list.filter(el => el.dt_txt.includes(`15:00:00`));
                dispatch(fetchDataWeatherActions(city, currentData));
            }
        });
};

export default {
    searchNewCity,
    addCityActions,
    fetchDataAboutCityAsync,
    addLocationOnNavigator,
    deleteCityActions,
    deleteCityActionsAsync,
    addCityActionsAsinc,
    fetchDataAboutCityOneAsync
}