//Welcome to weather.js!

//Grabbing the input + the city
const searchbar = document.getElementById('input');
const submit = document.getElementById('submit');

let city;

function getCity() {
    city = searchbar.value;
    console.log(city);
    fetchWeather();
}

//Selecting the application box, the icon, & the response-time paragraph
const icon = document.getElementById('w-icon');
const application = document.querySelector('.app');
const resTime = document.querySelector('#res-time');

function fetchWeather() {
    let start = Date.now();

    //The API key and final URL
    const apiKey = '515f3fa5d2503494452e23251073518b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    fetch(url) 
        .then((response) => {
            return response.json();
        }).then((data) => {
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            icon.alt = 'weather icon';

            console.log(data);

            const fetchedData = [data.main.feels_like, data.name, data.sys.country, data.weather[0].description, data.main.humidity, data.wind.speed, data.clouds.all, data.visibility, data.coord.lat, data.coord.lon];

            const allParagraphs = [
                document.querySelector('#city-temp'),
                document.querySelector('#city-country'),
                document.querySelector('#desc'),
                document.querySelector('#humid'),
                document.querySelector('#w-speed'),
                document.querySelector('#cloud-percent'),
                document.querySelector('#visible'),
                document.querySelector('#lat'),
                document.querySelector('#lon')
            ];

            allParagraphs[0].innerHTML = `Feels Like <strong> ${Math.floor(1.8 * (fetchedData[0] - 273) + 32)}°F </strong>`;
            allParagraphs[1].innerHTML = `${fetchedData[1]}, ${fetchedData[2]}`;
            allParagraphs[2].innerHTML = `Description: ${fetchedData[3]}.`;
            allParagraphs[3].innerHTML = `Humidity: ${fetchedData[4]}%`;
            allParagraphs[4].innerHTML = `Wind Speed: ${fetchedData[5]} MPH`;
            allParagraphs[5].innerHTML = `Cloudiness: ${fetchedData[6]}%`;
            allParagraphs[6].innerHTML = `Visibility: About ${Math.floor(fetchedData[7] / 1609)} mile(s)`;
            allParagraphs[7].innerHTML = `Latitude: ${fetchedData[8]}`;
            allParagraphs[8].innerHTML = `Longitude: ${fetchedData[9]}`;

            application.style.visibility = 'visible';

            let finish = Date.now();
            const responseTime = `${(finish - start) / 1000} seconds`;

            resTime.innerHTML = `Response Time: ${responseTime}`;
            resTime.style.visibility = 'visible';
    });
}

submit.addEventListener('click', getCity);
