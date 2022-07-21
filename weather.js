//Complete the Weather API Backend part using openweathermap api
function formatDay(date) {
    const DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return `${DAYS[date.getDay()]}`;
}

function formatDate(date) {
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

async function weather() {
    try {
        let city = document.getElementById('search-box').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6c7a04966bd52d4c186ab6418fda9131`;
        let res = await axios.get(url)
        console.log(res);
        let cityCountry = document.getElementById('city');
        cityCountry.innerHTML = res.data.name+", "+res.data.sys.country;
        let dayDate = document.getElementById('date');
        const now = new Date();
        dayDate.innerHTML = formatDay(now)+" "+formatDate(now);
        let temp = document.getElementById('temp');
        temp.innerHTML = res.data.main.temp+"°C";
        let weather = document.getElementById('weather');
        weather.innerHTML = res.data.weather[0].main;
        let hiLow = document.getElementById('hi-low');
        hiLow.innerHTML = res.data.main.temp_max+"°C / "+res.data.main.temp_min+"°C";
    } catch (error) {
        console.log('Promise rejected.');
        console.log(error.message);
    }
}
