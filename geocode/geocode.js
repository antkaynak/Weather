const request = require('request');


const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);
    request(
        {
            //sign up for the google geocode api and append the api key parameter
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json:true
        },(err,response,body) =>
        {
            if(err){
                callback(err);
                return;
            }

            if(body == null || body.results == null || body.results[0] == null){
                callback('Empty body');
                return;
            }

            if(body.status === 'OK'){
                callback(undefined, {
                    address: body.results[0].formatted_address
                });
            }
        }
)
};

module.exports.geocodeAddress = geocodeAddress;