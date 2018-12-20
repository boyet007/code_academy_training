var kelvin = 293;
var celcius = kelvin - 273;

var farenheit = celcius * (9/5) + 32;

farenheit = Math.floor(farenheit);

console.log('The temperature is ' + farenheit + ' degrees Farenheit')