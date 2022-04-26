const searchbar = document.getElementById('input');
const submit = document.getElementById('submit');

let city;

function getCity() {
    city = searchbar.value;
    console.log(city);
    fetchWeather();
}

//Selecting the application box & the icon
const icon = document.getElementById('w-icon');
const application = document.querySelector('.app');

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

            allParagraphs[0].innerHTML = `${Math.floor(1.8 * (fetchedData[0] - 273) + 32)}°F`;
            allParagraphs[1].innerHTML = `${fetchedData[1]}, ${fetchedData[2]}`;
            allParagraphs[2].innerHTML = `Description: ${fetchedData[3]}.`;
            allParagraphs[3].innerHTML = `Humidity: ${fetchedData[4]}%`;
            allParagraphs[4].innerHTML = `Wind Speed: ${fetchedData[5]} MPH`;
            allParagraphs[5].innerHTML = `Cloudiness: ${fetchedData[6]}%`;
            allParagraphs[6].innerHTML = `Visibility: About ${Math.floor(fetchedData[7] / 1609)} mile(s)`;
            allParagraphs[7].innerHTML = `Latitude: ${fetchedData[8]}`;
            allParagraphs[8].innerHTML = `Longitude: ${fetchedData[9]}`;
    });
}

submit.addEventListener('click', getCity);
