var API_KEY = "d1a21bccdabbdd9bf5fad7bc2ec65561";
var cel = false;
var wd;

function displayTemp(fTemp, c){

  return Math.round(fTemp) + "°C";
}




function render(wd, cel){

      
      var currentLocation = wd.name;
      var currentLocation3 = wd.sys.country;
      var currentWeather = wd.weather[0].description;
      var currentTemp = displayTemp(wd.main.temp, cel);
      var windspeed = wd.wind.speed;
      var direction = wd.wind.deg;




      var icon = wd.weather[0].icon;
            
      $('#currentLocation').html(currentLocation);
      $('#currentTemp').html(currentTemp);
      $('#currentWeather').html(currentWeather);
      $('#currentLocation2').html(currentLocation);
      $('#currentLocation3').html(currentLocation3);

      $('#windspeed').html(windspeed);


$("#container").css("visibility","visible");

      //$('#direc').html(direction);



      $('#direc').rotate(direction); 
      
      var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
      $('#currentTemp').prepend('<img src="' + iconSrc + '">');

    
     
    //$('#direction').prepend('<img src="' + iconSrc + '">');

      //$('#direc').rotate(150);

      var form = document.getElementById("poo");
      form.reset();
}

$(function(){


 {


$('form').on('submit', function(e) {
    e.preventDefault();


//$("#container").show();
//$('#direc').rotate(150);
//$('#theimage').rotateLeft(); 
 var city = $('.city_names').val();
  
    console.log("assigning the data...")

  
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' 
              + city  +'&APPID=' + API_KEY, function(apiData){
      wd = apiData;
      
      render(apiData, cel);

    })

   
   
  
})
  }

})


