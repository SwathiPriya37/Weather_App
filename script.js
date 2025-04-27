const apikey = "5ba3eb8ee589899205da393e93c9e8f6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    
    console.log(data);
}

checkWeather();