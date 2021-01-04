const addCityUserActions = (data) => ({type: 'ADD_CITY_LOCATION_USER', payload:  data});
const deleteCityActions = (city) => ({type: 'DELETE_CITY', payload: city});
const addCityActions = (inputCity) => ({type: 'ADD_NEW_CITY', payload: inputCity});
const fetchDataWeatherActions = (city,ourData) => ({type: 'FETCH_DATA', payload: {
        city: city,
        data: ourData

    }});

 const addCityActionsAsinc = (city, history)=> dispatch => {
     history.push(`/${city}`);
     dispatch(addCityActions(city));
 };

const deleteCityActionsAsync = (city, history) => dispatch => {
    console.log('ee');
    const currentState = JSON.parse(localStorage['city']).filter(el => el!==city);
    localStorage['city'] = JSON.stringify(currentState);

    if(JSON.parse(localStorage['city']) === 0)  history.push(`/erorr`);

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
                    dispatch(addCityUserActions(data.name));
                } else {
                    console.log('position no defined!!!');
                }
            })
    };

    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
};

const fetchDataAboutCityAsync = (city, history) => dispatch => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.toLowerCase()}&lang=ru&units=metric&APPID=b1b35bba8b434a28a0be2a3e1071ae5b`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.cod ==='200'){

                const dateNow = new Date().getDate();
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

                let currentData =  data.list.filter(el => el.dt_txt.includes(`${dateNow} ${dateHoursNow}:00:00`));
                // console.log(currentData)
                dispatch(fetchDataWeatherActions(city, currentData));

            } if(data.cod == '404') {
                dispatch(deleteCityActionsAsync(city, history));
            }
        });
};

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
    addCityActions,
    fetchDataAboutCityAsync,
    addLocationOnNavigator,
    deleteCityActions,
    deleteCityActionsAsync,
    addCityActionsAsinc,
    fetchDataAboutCityOneAsync
}