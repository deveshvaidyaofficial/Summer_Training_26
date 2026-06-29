const API_KEY = "bf5189b2a7033df17294fadf94af3b2f";

const city = document.getElementById("city");
const search = document.getElementById("search");
const clear = document.getElementById("clear");
const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const dateTime = document.getElementById("dateTime");
const weatherCard = document.getElementById("weatherCard");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

search.addEventListener("click", () => {
    const cityNameInput = city.value.trim();
    if (cityNameInput) {
        getWeather(cityNameInput);
    }
});

city.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const cityNameInput = city.value.trim();
        if (cityNameInput) {
            getWeather(cityNameInput);
        }
    }
});

async function getWeather(cityNameInput) {
    loading.classList.remove("hidden");
    error.classList.add("hidden");
    weatherCard.classList.add("hidden");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent = data.name;
        country.textContent = data.sys.country;
        temp.textContent = Math.round(data.main.temp);
        humidity.textContent = data.main.humidity;
        wind.textContent = data.wind.speed;
        pressure.textContent = data.main.pressure;
        dateTime.textContent = new Date().toLocaleString();

        weatherCard.classList.remove("hidden");
    }
    catch (err) {
        error.textContent = "City not found. Please try again.";
        error.classList.remove("hidden");
    }
    finally {
        loading.classList.add("hidden");
    }
}

clear.addEventListener("click", () => {
    city.value = "";

    weatherCard.classList.add("hidden");

    error.classList.add("hidden");

    loading.classList.add("hidden");

    cityName.textContent = "";
    country.textContent = "";
    temp.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
    pressure.textContent = "";
    dateTime.textContent = "";

    city.focus();
});