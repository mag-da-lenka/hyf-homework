
console.log(`Hello World! Hello Kitty! / Parallel world connection test.`)

console.log(`\n \n This is HOMEWORK JS3-1 week-12 by Magdalena /HYF /class 12.\n ex.3: WEATHER APP \n\ \n`);





// 03. ---> Weather app   ---> Instructions: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week1/homework.md
//                                      API: https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=c57bb374b895a905b4c971ed27afda37

const apiKey = "c57bb374b895a905b4c971ed27afda37";




function fetchData() {

	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=${apiKey}`)

		.then(response => response.json())

		.then(data => {

			// FULL OBJECT --> test
			console.log('data:', data)
			// The chosen city 
			console.log('data.name: --->', data.name); console.log('data.coord:', data.coord); console.log('data.coord.lat:', data.coord.lat); console.log('data.coord.lon:', data.coord.lon)
			// Temperature
			console.log('data.main.temp ---> will get converted (see html result):', data.main.temp); console.log('data.main.feels_like:', data.main.feels_like); console.log('data.main.temp_min:', data.main.temp_min); console.log('data.main.temp_max:', data.main.temp_max);
			// Icon for the weather type
			console.log('data.weather:', data.weather); console.log('data.weather[0].icon:', data.weather[0].icon);
			// Wind speed 
			console.log('data.wind:', data.wind); console.log('data.wind.speed:', data.wind.speed); console.log('data.wind.deg:', data.wind.deg);
			// How cloudy it is
			console.log('data.clouds.all:', data.clouds.all);
			// When sunrise and sunset is 
			console.log('data.sys.sunrise, data.sys.sunset ---> will get converted (see html result):', data.sys.sunrise, data.sys.sunset);
			// ---> My feature ---> pressure
			console.log('data.main.pressure:', data.main.pressure, 'hPa.');


			renderOutput(data);

		})
}




function renderOutput(data) {

	const renderCity = document.getElementById("city"); // console.log(renderCity);
	renderCity.innerHTML = `Welcome to ${data.name}, <br> 
	your latitude is ${data.coord.lat} and your longitude is ${data.coord.lon}.`

	const renderTemperature = document.getElementById("temp"); // console.log(renderTemperature);
	renderTemperature.innerHTML = `The temperature is ${Math.floor(data.main.temp - 273.15)} &#176C, 
	but it feels like ${Math.floor(data.main.feels_like - 273.15)} &#176C. <br> 
	Min. temperature today: ${Math.floor(data.main.temp_min - 273.15)} &#176C. <br> 
	Max. temperature today: ${Math.floor(data.main.temp_max - 273.15)} &#176C.`   // ---> ...so btw <br> works in backticks! ...but I promise not to use <br> in general :>

	const renderIcon = document.getElementById("icon"); // console.log(renderIcon);
	renderIcon.innerHTML = `The icon: ${data.weather[0].icon}.`

	const renderWindSpeed = document.getElementById("wind-speed"); // console.log(renderWindSpeed);
	renderWindSpeed.innerHTML = `The wind speed is: ${data.wind.speed} metres per second.`

	const renderHowCloudy = document.getElementById("how-cloudy"); // console.log(renderHowCloudy);
	renderHowCloudy.innerHTML = `The clouds now are covering ${data.clouds.all} % of the sky.`

	const renderSun = document.getElementById("sun"); // console.log(renderSun);  
	// renderSun.innerHTML = `Today the sun rises at ${data.sys.sunrise} and sets at ${data.sys.sunset}.` 
	let renderSunriseForHumans = new Date(data.sys.sunrise * 1000).getHours() + `:` + new Date(data.sys.sunrise * 1000).getMinutes(); // console.log(renderSunriseForHumans);
	let renderSunsetForHumans = new Date(data.sys.sunset * 1000).getHours() + `:` + new Date(data.sys.sunset * 1000).getMinutes();    // console.log(renderSunsetForHumans);
	renderSun.innerHTML = `Today the sun rises at ${renderSunriseForHumans} and sets at ${renderSunsetForHumans}.`

	const renderPressure = document.getElementById("pressure"); // console.log(renderPressure);
	renderPressure.innerHTML = `The air pressure to day is ${data.main.pressure} hPa.`

}

// fetchData(); 


const renderLoadingData = document.getElementById("loading-data"); // console.log(renderLoadingData); 
renderLoadingData.innerHTML = ` `
const inputReader = document.getElementById("city-name");
console.log(inputReader.value);

const manageInput = () => {
	if (!inputReader.value) { renderLoadingData.innerHTML = `Please type the city`; }
	else if (inputReader.value.toLowerCase() !== "copenhagen") {  renderLoadingData.innerHTML = `We have not data for this city. Try Copenhagen :D`;}
	else if (inputReader.value.toLowerCase() === "copenhagen") { fetchData() }
};

document.getElementById('fetch-data-button')
	.addEventListener('click', manageInput)    // here I have removed fetchData and put manageInput to make the input/button respont to  different options













// ------------> https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API ---------------------------------------------- 

function getMyCurrentLocation() {

	const status = document.querySelector('#status');
	const mapLink = document.querySelector('#map-link'); mapLink.href = ''; mapLink.textContent = '';

	function success(position) {

		const latitude = position.coords.latitude; const longitude = position.coords.longitude;

		status.textContent = '';
		mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		mapLink.textContent = `Latitude: ${latitude} °,  Longitude: ${longitude} °`;

	}

	function error() { status.textContent = 'Unable to retrieve your location'; }

	if (!navigator.geolocation) { status.textContent = 'Geolocation is not supported by your browser'; }
	else { status.textContent = 'Locating…'; navigator.geolocation.getCurrentPosition(success, error); }

}

document.querySelector('#find-me').addEventListener('click', getMyCurrentLocation);