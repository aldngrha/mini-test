const API_KEY = '8084f3951452b0daba616a0530a2d009'; //api key
const LATITUDE = '-6.200000'; // Latitude Jakarta source from www.latlong.net
const LONGITUDE = '106.816666'; // Longitude Jakarta source from www.latlong.net
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=metric`; // api url

// change date format to "Wed, 15 Nov 2023"
function formatDate(dateString) {
    // option formatted date
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    // convert date to format US
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// funtion to get weather forecast and show it
async function getWeatherForecast() {
    try {
        // get data from OpenWeatherMap API
        const response = await fetch(API_URL);
        const data = await response.json(); // save as json

        // collect wheather forecast for next 5 days
        const forecasts = data.list.reduce((acc, forecast) => {
            const date = forecast.dt_txt.split(' ')[0]; // get date from wheater
            const formattedDate = formatDate(date); // change date format
            const temperature = forecast.main.temp; // get temperature

            // save only one temperature per day
            if (!acc[formattedDate]) {
                acc[formattedDate] = temperature;
            }

            return acc;
        }, {});

        // print weather forecast Jakarta for next 5 days
        console.log(`Weather forecast:`);
        for (const date in forecasts) {
            console.log(`${date}: ${forecasts[date]}°C`);
        }
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

// call function
getWeatherForecast();