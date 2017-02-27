const axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=81493d615b7c66c0d4f4c91c58e3098d&units=metric';

let getTemp = function (location) {
    let encodedLocation = encodeURI(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}}`;

    return axios.get(requestUrl).then(
        (response) => {
            if(response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        }, (error) => {
            throw new Error(error.data.message);
        })
};

module.exports = {
    getTemp
};