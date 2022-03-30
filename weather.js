let btn = document.getElementById('button');

const apiKey = '515f3fa5d2503494452e23251073518b';
const url = `api.openweathermap.org/data/2.5/weather?london,uk&APPID=${apiKey}`;

console.log(url);

function fetchWeather() {
    fetch(url) 
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
    });
}

btn.addEventListener('click', fetchWeather);
