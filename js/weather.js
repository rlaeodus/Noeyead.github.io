const html = document.getElementById("body");
const API_KEY = "2c3d1353560fd843c41d6dad60ff0e57"; // api key
const body = document.getElementById("body");


function onGeoOk(position){ // 날씨 api 받아서 출력
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; // 경도
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    // 날싸 api 위도경도 보내서 값 받기
    fetch(url) // url 요청보내고 응답받기
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`

        console.log(data.weather[0].main,data.main.temp);
        changeImg(data.weather[0].main);
    });
    body.classList.remove("hidden");
}
function onGeoError(){
    body.classList.remove("hidden");
    html.classList.add('weather-default');
    const error = document.querySelector("#weather span:last-child");
    error.innerText = `Can't fine locate`;
}

function changeImg(data){
    const weather = data;
    html.classList.remove(...html.classList);
    
    if(weather === 'Clouds'){
        html.classList.add('weather-cloudes');
    }else if(weather === 'Clear'){
        html.classList.add('weather-clear');
    }else if(weather === 'Thunderstorm'){
        html.classList.add('weather-thunderstorm');
    }else if(weather === 'Drizzle'){
        html.classList.add('weather-thunderstorm');
    }else if(weather === 'Rain'){
        html.classList.add('weather-rain');
    }else if(weather === 'Snow'){
        html.classList.add('weather-snow');
    }
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);