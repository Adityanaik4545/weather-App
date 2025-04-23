const myApi="082799a14dd183a73fe965dd83265d1c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&";

let searchField=document.querySelector("input");
let findButton=document.querySelector(".search button");
let iconChange=document.querySelector(".weather-icon");

async function updateWeather(city) {
    let response= await fetch(`${apiUrl}q=${city}&appid=${myApi}`);
  
    if (response.status==404) {
        document.querySelector(".error").style.display="block"
          document.querySelector(".weather").style.display="none"
        document.querySelector(".details").style.display="none"

    } else {
        let data=await response.json();
        document.querySelector(".temp").textContent=`${Math.round(data.main.temp)}°C`;
        document.querySelector(".city").textContent=data.name;
        document.querySelector(".humidity").textContent=`${data.main.humidity}%`;
        document.querySelector(".wind").textContent=`${data.wind.speed}km/h`;
        if (data.weather[0].main=="Clouds") {
            iconChange.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Snow")
        {
            iconChange.src="images/snowman.png"
        }
        else if(data.weather[0].main=="Clear")
        {
            iconChange.src="images/sun.png"
        }
        else if(data.weather[0].main=="Fog")
        {
            iconChange.src="images/fog.png"
        }
        else if(data.weather[0].main=="Rain")
        {
            iconChange.src="images/heavy-rain.png"
        }
        else if(data.weather[0].main=="Thunderstorm")
        {
            iconChange.src="images/thunder.png"
        }
        else if(data.weather[0].main=="Drizzle")
        {
            iconChange.src="images/drizzle.png"
        }
        document.querySelector(".weather").style.display="flex"
        document.querySelector(".details").style.display="flex"
         document.querySelector(".error").style.display="none"
    }
    
    }
findButton.addEventListener("click",function(){
        let city=searchField.value.trim();
        if (city=="")
            return;
    updateWeather(searchField.value)
})