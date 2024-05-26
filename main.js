const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
    

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        // if(data.weather[0].main == 'Clouds'){
        // weatherIcon.src = 'images/clouds.png';
        // }
        // else if(data.weather[0].main == 'Clear'){
        // weatherIcon.src = 'images/clear.png';
        // }
        // else if(data.weather[0].main == 'Rain'){
        // weatherIcon.src = 'images/rain.png';
        // }
        // else if(data.weather[0].main == 'Drizzle'){
        // weatherIcon.src = 'images/drizzle.png';
        // }
        // else if(data.weather[0].main == 'Mist'){
        // weatherIcon.src = 'images/mist.png';
        // }

        switch(data.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = 'images/clouds.png';
                break;
            case 'Clear':
                weatherIcon.src = 'images/clear.png';
                break;
            case 'Rain':
                weatherIcon.src = 'images/rain.png';
                break;
            case 'Drizzle':
                weatherIcon.src = 'images/drizzle.png';
                break;
            case 'Mist':
                weatherIcon.src = 'images/mist.png';
                break;
            default:
                console.log('invalid weather icon');
                break;
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
            
            
    }
        

    searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
    })
    searchBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { 
        checkWeather(searchBox.value);
             }
        });