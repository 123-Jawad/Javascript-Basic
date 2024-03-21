// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Test the functions with example temperatures
let celsiusTemp = 60;
let fahrenheitTemp = 45;

let convertedToFahrenheit = celsiusToFahrenheit(celsiusTemp);
let convertedToCelsius = fahrenheitToCelsius(fahrenheitTemp);

console.log(`${celsiusTemp}°C is ${convertedToFahrenheit}°F`);
console.log(`${fahrenheitTemp}°F is ${convertedToCelsius}°C`);
