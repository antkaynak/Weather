
const request = require('request');

const getWeather = (location,callback) => {
    request(
        {
            url:`https://forecast.io/forecast/apikey/${location}`,
            json:true
        },(err,response,body) => {
            if(err){
                callback(err);
                return;
            }
            if(response.statusCode === 400){
                callback(err);
                return;
            }
            if(response.statusCode === 200){
                callback(undefined,body.currently.temperature);
            }
        }

    );
};

module.exports.getWeather = getWeather;