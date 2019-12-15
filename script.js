// three areas:
// 1) input with search button, below is saved results
// 2) current conditions that hold Temperature, Humidity, Wind Speed, UV Index
// 3) 5-Day Forecast with five images that have date, weather icon, temperature, humidity

// Create main divs to hold content. #Container holds three divs, left #mainsearch, right #maincurrent, bellow #mainfiveday has five divs of #weather1, weather2, weather3, weather4, weather5.
 
function weatherForcast(weather) {

    // querying weather api
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + weather + "&units=imperial" + "&APPID=860338c2b1cf62410a87894b92d022a6";
            
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
    console.log(response);
        // $("#main-current").text("Current temp: " +  response.main.feels_like);
        // $(".previously-searched").text("Humidity: " +  response.main.humidity);
        // $(".previously-searched").text("Wind Speed: " + response.wind.speed);

    // $("#main-current").text(JSON.stringify(response));feels_like

    $("#main-current").empty();
    
    console.log(queryURL);
    console.log(response);
    console.log(response.weather[0].icon);
        // var iconSrc = $("<src>").html("http://openweathermap.org/img/wn/");
        var newNT = $("h1").text(response.name);
        var newIcon = $("<img>").attr("http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
        var newHT = $("<h3>").text("Temperature: " + response.main.temp + " degrees");
        var newHH = $("<h3>").text("Humidity: " + response.main.humidity +"%");
        var newHW = $("<h3>").text("WindSpeed: " + response.wind.speed + "m/s");
 
        var newDiv = $("<div>");

        newDiv.append(newNT, newIcon, newHT, newHH, newHW);

        $("#main-current").html(newDiv);
    });
}

$("#add-city").on("click", function(current) {
    current.preventDefault();
    var inputWeather = $("#city-input").val().trim();
    
    weatherForcast(inputWeather);
        });


// ********* 2 different ajax calls for current, five day. five day has to change for day parset 4 objects, [i] specif place in object] specif day in objects in an array. look at sample  bands in town solved.

//         $("#addCity").on("click",function() {
//             if ($("#cities").val() !== "") {
//                 var newBtn = $('<p>');
//                 newBtn.val($("#cities").val());
//                 newBtn.text($("#cities").val());
//                 newBtn.addClass("city-text");
//                 $('#buttons').append(newBtn);
//             }
//         });





// code 5 day for loop
// $("#five-day").empty();
    
// var results = response;
// console.log(results);
// for (var i = 0; i < results.length; i++) {
//     var currentWeather = results[i].main.feels_like;
//     var humidity = results[i].main.humidity;
//     var windSpeed = results[i].wind.speed;
//     console.log(currentWeather);
//     var newDiv = $("<div>");
//     var newI = $("<img>")
//     var newT = $("<p>");
//     var newW = $("<p>");
//     var newIc = $("<img>").attr("http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
//     newT.text("Temperature: " + currentWeather);
//     newH.text("Humidity: " + humidity);
//      newDiv.append(newIc)
//     newDiv.append(newT);
//     newDiv.append(newH);

//     $("#five").append(newDiv);
// }











        // add city button 
// $("#add-city").on("click", function(weather) {
//             event.preventDefault();
// var weather = $("#city-input").val();





// five day forcast test1
function fiveDay(weather) {

    // querying weather api
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + weather + "&units=imperial" + "&APPID=860338c2b1cf62410a87894b92d022a6";
            
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
    console.log(response);

    $("#five-day").empty();
    
    console.log(queryURL);
    console.log(response);
    console.log(response.weather[0].icon);
        var newIcon = $("<img>").attr("http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
        var newHT = $("<h5>").text("Temperature: " + response.main.temp + " degrees");
        var newHH = $("<h5>").text("Humidity: " + response.main.humidity +"%");
 
        var newDiv = $("<div>");

        newDiv.append(newIcon, newHT, newHH);

        $("#five-day").html(newDiv);
    });
}

$("#add-city").on("click", function(current) {
    current.preventDefault();
    var inputWeather = $("#city-input").val().trim();
    
    fiveDay(inputWeather);
        });




        // test loop
        function fiveDay2(weather) {
            
        var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + weather + "&units=imperial" + "&APPID=860338c2b1cf62410a87894b92d022a6";
            
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
    console.log(response);

    $("#five-day2").empty();
        
                if (data !== null && data.list !== null) {
                    var result = data,
                        weather = {},
                        compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'],
                        image404 = 'https://s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png';
                    console.log(result);
                    var weathers = [];
                    for (var i = 0; i < 3; i++) {
                        weathers.push({
                            temp: Math.round(result.list[i].temp.day),
                            code: result.list[i].weather[0].id,
                            text: fiveDay2(result.list[i].weather[0].description),
                            date: new Date(result.list[i].dt * 1000)
                        });
                    }
                    console.log(weathers);
                    var today = weathers[0];
                    var tomorrow = weathers[1];
                    var dayAfterTomorrow = weathers[2];
                } 
                $("#add-city").on("click", function(current) {
                    current.preventDefault();
                    var inputWeather = $("#city-input").val().trim();
                    
                    fiveDay2(inputWeather);
                        });

            }
        );
        
        }