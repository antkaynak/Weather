
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js');

const argv = yargs
.options({
    a:{
        demand: true,
        alias:'address',
        describe:'Address to fetch weather',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (err, result)=> {
    if(err){
        console.log('An error occurred.');
        console.log(err);
        return;
    }
    console.log(JSON.stringify(result, undefined,2));
    weather.getWeather(`${result.latitude},${result.longitude}`, (w_err,w_result)=>{
        if(w_err){
            console.log(w_err);
        }
        console.log(JSON.stringify(w_result,undefined,2));
    })
});