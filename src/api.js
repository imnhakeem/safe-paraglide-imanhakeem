function buttonClicked(){
    var city = document.getElementById("city").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9fd7a449d055dba26a982a3220f32aa2`)

    .then(response => response.json())
    .then(data => {
        var info=data
        console.log(data)
        console.log(`Temperature in ${city}:`,data.main.temp)
        document.getElementById("display").append(`Temperature in ${city}: `,(data.main.temp),`°C`)
        console.log("Description:",data.weather[0].description)
        document.getElementById("display1").append(`Weather: `,(data.weather[0].description))
        console.log("Wind Speed(mps)",data.wind.speed)
        var speed=data.wind.speed
        var tot=speed*2.2369
        const tot1= tot.toFixed(2)
        console.log("Wind Speed(mph)",tot1)
        document.getElementById("display2").append("Wind Speed: ",tot1,"mph")
        console.log("Wind Speed(mps)",data.wind.speed)
        var speed1=data.wind.gust
        var tot=speed1*2.2369
        const tot2= tot.toFixed(2)
        console.log("Wind Speed(mph)",tot1)
        document.getElementById("display3").append("Wind Gust: ",tot2,"mph")
        console.log("Humidity: ",data.main.humidity)
        document.getElementById("display4").append("Humidity: ",(data.main.humidity),`%`)
        document.getElementById("display5").append("Longitude: ",(data.coord.lon))
        document.getElementById("display6").append("Latitude: ",(data.coord.lat))
    })}
    