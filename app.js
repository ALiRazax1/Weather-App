let inputCityName = document.getElementById("input-city")
let cityName = document.getElementById("city-name")
let temperature = document.getElementById("temperature")
let humidity = document.getElementById("humidity")
let windSpeed = document.getElementById("wind")
let weather = document.getElementById("weather")
let weatherIcon = document.getElementById("weather-icon")

const apiKey ="96954629bcc344aeafdf5ad2ac216d66"


async function searchWeather(){
    if(inputCityName.value.trim() === ""){
        alert("Please Enter City Name")
    }else{const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName.value}&appid=${apiKey}`
    const response = await fetch(baseURL)
    const data = await response.json()



        if (data.cod == 404){alert("City not found")}else{const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName.value}&appid=${apiKey}`
        const response = await fetch(baseURL)
        const data = await response.json()}
        
    console.log(data)
    
    cityName.innerText = data.name
    temperature.innerText = Math.floor(data.main.temp - 273.15)+"\u00B0C"
    humidity.innerText = data.main.humidity +"%"
    windSpeed.innerText = data.wind.speed + ' km/hr'
    weather.innerText = data.weather[0].main
    weatherIcon.src = `./assets/images/${data.weather[0].main}.png`
    }
    
    

}


window.onload = function(){
    navigator.geolocation.getCurrentPosition(userLocation)
}

async function userLocation(navigatorData){
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${navigatorData.coords.latitude}&lon=${navigatorData.coords.longitude}&appid=${apiKey}`
    const response = await fetch(baseURL)
    const data = await response.json()
    console.log(data);

    cityName.innerText = data.name
    temperature.innerText = Math.floor(data.main.temp - 273.15)+"\u00B0C"
    humidity.innerText = data.main.humidity+"%"
    windSpeed.innerText = data.wind.speed + ' km/hr'
    weather.innerText = data.weather[0].main
    weatherIcon.src = `./assets/images/${data.weather[0].main}.png`
    











}

