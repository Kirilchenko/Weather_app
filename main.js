const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const apiKey = '842ca11cee8a962241a5f1a7032a0f90';

const searchInput = document.querySelector('.searchInput');
const buttonSerch = document.querySelector('.btnSerch');
let cityName = document.querySelector('.cityName');
let cityTemperature = document.querySelector('.cityTemperature');
let country = document.querySelector('.country');
let iconDiv = document.querySelector('.divIconWeather');

function getForecast(city) {
  let request = apiUrl + city + `&lang=uk&appid=${apiKey}`;
  fetch(request)
    .then(response => response.json())
    .then((dataCity) => {
      if (dataCity.cod == "404") {
        cityName.innerHTML = 'Ошибка ввода';
      } else {
        cityName.innerHTML = dataCity.name;
        cityTemperature.innerHTML = Math.round(dataCity.main.temp) + "&#8451";
        country.innerHTML = dataCity.sys.country;
        iconDiv.innerHTML = '<img src="http://openweathermap.org/img/wn/' + dataCity.weather[0]['icon'] + '@2x.png">';
      }
    })
}
searchInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    getForecast(searchInput.value);
    searchInput.value = '';
  }
});

buttonSerch.addEventListener('click', () => {
  getForecast(searchInput.value);
  searchInput.value = '';
});




