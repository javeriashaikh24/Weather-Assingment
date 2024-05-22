 var weather = prompt("Enter the weather ( sunny, rainy, cloudy , cold , windy ,stormy):");
document.write("<body style='height=70vh'; ' background-image: url(bg-img.jpg);'    oerflow:hidden;>"+"</body>");

if (weather) {
     var weatherLower = weather.toLowerCase();
    if (weatherLower === 'sunny') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
        '<img src="weather/sunny.jpg" class="card-img-top " alt="...">' +
        ' <div class="card-body ">' +
        '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
        ' </div>' +
        ' </div>');
        
        
    } else if (weatherLower === 'rainy') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
        '<img src="weather/rainy.webp" class="card-img-top " alt="...">' +
        ' <div class="card-body ">' +
        '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
        ' </div>' +
        ' </div>');

        
    } else if (weatherLower === 'cloudy') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
        '<img src="weather/cloudy.jpg" class="card-img-top " alt="...">' +
        ' <div class="card-body ">' +
        '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
        ' </div>' +
        ' </div>');
       
    }
    else if (weather == 'cold') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
            '<img src="weather/cold.webp" class="card-img-top " alt="...">' +
            ' <div class="card-body ">' +
            '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
            ' </div>' +
            ' </div>');
    }
    
    else if (weather == 'windy') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
            '<img src="weather/windy.jpg" class="card-img-top " alt="...">' +
            ' <div class="card-body ">' +
            '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
            ' </div>' +
            ' </div>');
    }
    
    else if (weather == 'stormy') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
            '<img src="weather/stormy.jpg" class="card-img-top" alt="...">' +
            ' <div class="card-body ">' +
            '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
            ' </div>' +
            ' </div>');
    }    


 
}


