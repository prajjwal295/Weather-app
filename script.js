
const grantAccessButton = document.querySelector("[data-grantAccess]");
const cityName = document.querySelector("[data-cityName]");
const flag = document.querySelector("[data-countryIcon]");
const weatherDesc = document.querySelector("[data-weatherDesc]");
const weatherIcon = document.querySelector("[data-weatherIcon]");
const temp = document.querySelector("[data-temp]");
const windspeed = document.querySelector("[data-windspeed]");
const humidity = document.querySelector("[data-humidity]");
const cloud = document.querySelector("[data-cloudiness]");
const apiErrorContainer = document.querySelector(".api-error-container");
const apiErrorBtn = document.querySelector("[data-apiErrorBtn]");
const API_KEY = "89852f15bebd043e42effdd09d6aef37";


const myWeather = document.querySelector(".your-weather");
const searchWeather = document.querySelector(".search-weather");
const case1 = document.querySelector(".case-1")
const case2 = document.querySelector(".case-2")
const case3 = document.querySelector(".case-3")
const loadingBox = document.querySelector(".loading-box")
const searchBtn = document.querySelector(".circleBtn")
const placeholderbtn = document.querySelector(".placeholder-btn")



searchWeather.onclick = () => {
    case1.style.display = 'none'
    case3.style.display = 'none'
    case2.style.display = 'flex'
    apiErrorContainer.style.display = 'none'

}

myWeather.onclick = () => {
    case1.style.display = 'flex'
    case2.style.display = 'none'
    case3.style.display = 'none'
    apiErrorContainer.style.display = 'none'

}


const findMyState = () => {


    const success = (position) => {
        console.log(position)
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

        fetch(API_URL)
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                cityName.innerText = `${data.name}`
                weatherDesc.innerText = `${data.weather[0].description}`
                flag.src = `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
                weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                temp.innerText = `${data.main.temp + ' C'}`
                windspeed.innerText = `${data.wind.speed + ' m/s'}`
                cloud.textContent = `${data.clouds.all + '%'}`
                humidity.innerText = `${data.main.humidity + '%'}`
            })
            .catch(error => console.log(error))
            
            case1.style.display = 'none'
            case2.style.display = 'none'
            case3.style.display = 'none'
            loadingBox.style.display = 'flex'
            apiErrorContainer.style.display = 'none'
            setTimeout(() => {
  
                case1.style.display = 'none'
                case2.style.display = 'none'
                case3.style.display = 'flex'
                loadingBox.style.display = 'none'
                apiErrorContainer.style.display = 'none'

            }, 1000)

            
        
    }

    const error = () => {
        console.log('error')
        case1.style.display = 'none'
        case2.style.display = 'none'
        case3.style.display = 'none'
        apiErrorContainer.style.display = 'flex'

    }

    navigator.geolocation.getCurrentPosition(success, error);


}


const findOtherState = (city) => {


    const API_URL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(API_URL2)
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            cityName.innerText = `${data.name}`
            weatherDesc.innerText = `${data.weather[0].main}`
            flag.src = `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
            weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            temp.innerText = `${data.main.temp + ' C'}`
            windspeed.innerText = `${data.wind.speed + ' m/s'}`
            cloud.textContent = `${data.clouds.all + '%'}`
            humidity.innerText = `${data.main.humidity + '%'}`
            console.log(data)
            
            case1.style.display = 'none'
            case2.style.display = 'none'
            case3.style.display = 'none'
            loadingBox.style.display = 'flex'
            apiErrorContainer.style.display = 'none'
            setTimeout(() => {
  
                case1.style.display = 'none'
                case2.style.display = 'none'
                case3.style.display = 'flex'
                loadingBox.style.display = 'none'
                apiErrorContainer.style.display = 'none'

            }, 1000)
        })

        .catch(error => {
            console.log({ error })

            case1.style.display = 'none'
            case2.style.display = 'none'
            case3.style.display = 'none'
            loadingBox.style.display = 'flex'
            apiErrorContainer.style.display = 'none'

            setTimeout(() => {
  
                case1.style.display = 'none'
                case2.style.display = 'none'
                case3.style.display = 'none'
                loadingBox.style.display = 'none'
                apiErrorContainer.style.display = 'flex'

            }, 1000)

        })



}

grantAccessButton.onclick = () => {
    findMyState()

}
apiErrorBtn.onclick = () => {
    findMyState()
}

searchBtn.onclick = () => {
    const city = placeholderbtn.value.toUpperCase()
    findOtherState(city);
}
