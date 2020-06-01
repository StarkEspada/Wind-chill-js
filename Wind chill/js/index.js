var temperature = document.querySelector(".temperature");
var windSpeed = document.querySelector(".wind-speed");
var calculate = document.querySelector(".calculate");
var result = document.querySelector(".result");
var faringate = document.querySelector(".faringate");
var celsiuses = document.querySelector(".celsiuses");
var clear = document.querySelector(".clear");

var setFahrenheit = "";

calculate.style.display = "none";

function colorChange(){
	calculate.style.background = "white";
	calculate.style.border = 2 + "px solid white";
	calculate.style.color = "black";
}

function resertColor(){
	calculate.style.background = "#0000ffb3";
	calculate.style.border = 2 + "px solid #0000ff94";
	calculate.style.color = "white";
}

faringate.addEventListener("click", function(){
	windSpeed.value = "";
	temperature.value = "";
	result.innerHTML = "";
	setFahrenheit = true;
	faringate.innerHTML = "&#10004";
	console.log(setFahrenheit)
	if(setFahrenheit === true){
		calculate.style.display = "inline-block"
		calculate.addEventListener("click", function(){

			colorChange()
			setTimeout(resertColor, 200);

			var temperatureValue = temperature.value;
			var windSpeedValue = windSpeed.value;
			var chill = 0.0817*(3.71*(Math.pow(windSpeedValue, 0.5))+5.81-0.25*windSpeedValue)*(temperatureValue-91.4)+91.4;
			var chillRounding = Math.ceil((chill)*100)/100	
			result.innerHTML = chillRounding + "&#8457"
			console.log(chill)
		})
	}
})


celsiuses.addEventListener("click", function(){
	windSpeed.value = "";
	temperature.value = "";
	result.innerHTML = "";
	setAttribute = false;
	celsiuses.innerHTML = "&#10004"
	faringate.innerHTML = ""
	console.log(setAttribute)
	if(setAttribute === false){
		calculate.style.display = "inline-block"
		calculate.addEventListener("click", function(){

			colorChange()
			setTimeout(resertColor, 200);

			var temperatureValue = temperature.value;
			var windSpeedValue = windSpeed.value;
			var windDegree = (Math.pow(windSpeedValue, 0.16))
			var chill = 13.12 + (0.6215 * temperatureValue) - (11.37 * windDegree) + (0.3965 * temperatureValue * windDegree);	
			var chillRounding = Math.ceil((chill)*100)/100
			result.innerHTML = chillRounding + "&#8451"
			console.log(chill)
		})
	}
})



faringate.addEventListener("click", function(){
	celsiuses.innerHTML = ""
})

clear.addEventListener("click", function(){
	windSpeed.value = "";
	temperature.value = "";
	result.innerHTML = "";
	setAttribute = false;
	celsiuses.innerHTML = ""
	faringate.innerHTML = ""

	clear.style.background = "white"
	clear.style.border = 2 + "px solid white"
	clear.style.color = "black"

	function resertColor(){
		clear.style.background = "#0000ffb3"
		clear.style.border = 2 + "px solid #0000ff94"
		clear.style.color = "white"
	}
	setTimeout(resertColor, 200);

})




/*	Для расчета охлаждения ветром используйте уравнение:
Wind Chill = 13,12 + (.6215 x T) - (11,37 x V 0,16 ) + (.3965 x T x V 0,16 )

Пример: когда температура (в градусах Цельсия) составляет 2 градуса, ветер скорость 7 км / ч, эффективный ветер:

Холод ветра = 13.12 + (.6215 x 2) - (11.37 x 7 0.16 ) + (.3965 x 2 x 7 0.16 )


Холод ветра = -0.08 градусов по Цельсию	*/
