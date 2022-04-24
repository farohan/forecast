const searchbar = document.getElementById('input');
const submit = document.getElementById('submit');

let city;

function getCity() {
    city = searchbar.value;
    console.log(city);
    fetchWeather();
}

//Selecting the icon
const icon = document.getElementById('w-icon');

function fetchWeather() {
    const apiKey = '515f3fa5d2503494452e23251073518b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    fetch(url) 
        .then((response) => {
            return response.json();
        }).then((data) => {
            icon.src = `https://api.openweathermap.org/img/w/${data.weather[0].icon}`;
            icon.alt = 'weather icon';

            console.log(data);

            const fetchedData = [data.main.feels_like, data.name, data.sys.country, data.weather[0].description, data.main.humidity, data.wind.speed, data.clouds.all, data.coord.lat, data.coord.lon];
            for (let i = 0; i < fetchedData.length; i++) {
                console.log(fetchedData[i]);
            }

            const allParagraphs = []; //list of all the paragraphs
    });
}

submit.addEventListener('click', getCity);
