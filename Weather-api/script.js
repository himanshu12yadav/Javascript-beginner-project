const api = "9d39e6d7eba18c38b49249eddd1556cf";



var cors = "https://cors-anywhere.herokuapp.com/";
var svg = document.querySelector("img");


var timezone = document.querySelector(".main h3 span");
var lon = document.querySelector(".longitude span");
var lat = document.querySelector(".latitude span");
var loc = document.querySelector(".loc");
var humidity = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');
var temp = document.querySelector('.Temp');
var max = document.querySelector('.max');
var min = document.querySelector('.min');
var desc = document.querySelector('.desc');
var title = document.querySelector('.title');
var cloud = document.querySelector('.cl');
var speed = document.querySelector('.sp');
var detail = document.querySelector('.detail_view');
var alert = document.querySelector('.alert');


// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date=1527811200&
// opacity=0.9&fill_bound=true&appid={api_key}

document.querySelector('.btn').addEventListener('click', function(e){
  e.preventDefault();
  var input = document.querySelector('form input').value;
  var url;
  console.log(Boolean(input));
  if (input){
    url = `${cors}api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}`;
    weatherReport(url);

  }else{
   alert.style.display = "block"; 
   alert.innerText = "Field is Empty"; 
   return;
}

});

async function weatherReport(url) {

  const data = await fetch(url);
  var res = await data.json();

  if (res.name === undefined){
     alert.style.display = "block"; 
     alert.innerText = "InCorrect Places"; 
     svg.style.display = "None";

    return;
  }else{
    svg.style.display = "None";
    detail.style.display = "block";
    alert.style.display = "none"; 
 
  }
 
 
  console.log(res);
  print(res);
}


function print(data) {

  loc.innerHTML = data.name;
  timezone.innerHTML = data.timezone;
  lon.innerHTML = data.coord.lon;
  lat.innerHTML = data.coord.lat;
  humidity.innerHTML = data.main.humidity;
  pressure.innerHTML = data.main.pressure;
  temp.innerHTML = data.main.temp;
  max.innerHTML = data.main.temp_max;
  min.innerHTML = data.main.temp_min;
  title.innerHTML = data.weather[0].main;
  cloud.innerHTML = data.clouds.all;
  speed.innerHTML = data.wind.speed;

}
