const API_KEY = 

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url).then((response) => response.json()).then((data) => {
		console.log(data);
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
	})
}

function onGeoError() {
	 alert("날씨정보를 불러올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
