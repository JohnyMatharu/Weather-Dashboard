var entry = 0;
document.getElementById("textEntryBtn").addEventListener("click", enterRequest);

function enterRequest(event){
    event.preventDefault();
entry = document.getElementById("textEntry").value;
console.log(entry);

var urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + entry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
console.log(urlWeather);
 fetch(urlWeather).then(response => response.json()) 
   .then(data => console.log(data.main)); 
   //document.getElementById("dailyWeather").innerHTML = data.main;

   var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + entry + "&appid=1686d3ccdcbc85f85b97533207c961cf";
   console.log(urlForecast);
    fetch(urlForecast).then(response => response.json()) 
      .then(data => console.log(data)); 
//  document.getElementById("dailyForecast").innerHTML = data;
   };
//anotherFunction() to sort two types of data

//displayData2() current data

// displayData2() 5 days forecast