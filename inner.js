const api=
{
    key: "5f3b4edf3e414e4eb8504bb844d6eab3",
    base: "https://timezone.abstractapi.com/v1/current_time/?api_key="
}

function logTime() {
    mytime.innerText = `Time in Malaysia: ${new Date().toLocaleTimeString()}`;
  }
  
setInterval(logTime, 1000);

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

getResults('Pekan');


function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        getResults2(searchbox.value);
    }
}

 function getResults(query)
 {
     fetch(`${api.base}${api.key}&location=${query}`)
     .then(mytimezone => {
         return mytimezone.json();
     }).then(displayResults);
 }

function displayResults(mytimezone){
    let get_datetime = mytimezone.datetime;
    const array_datetime = get_datetime.split(" ");
    let mydate = document.querySelector('#mydate');
    let mytime = document.querySelector('#mytime');
    let mysecondtime = document.querySelector('#mysecondtime');
    mysecondtime.innerText = `Time: ${array_datetime[1]}`;
    mydate.innerText = `Date: ${array_datetime[0]}`;

    let timezonename = document.querySelector('#mycountry');
    timezonename.innerText = `Clock: ${mytimezone.timezone_name}`;

}

const api2=
{
    key: "4bf4e56160eec72c603cfcbca2063939",
    base: "https://api.openweathermap.org/data/2.5/"
}

getResults2('Pekan');
function getResults2 (query) 
{
    fetch(`${api2.base}weather?q=${query}&units=metric&APPID=${api2.key}`)
        .then(weather => {
         return weather.json();
        }).then(displayResults2);
}
      
function displayResults2 (weather) 
{
    document.getElementById("mytemp").innerText=`Temperatute: ${weather.main.temp}°c`;
}
