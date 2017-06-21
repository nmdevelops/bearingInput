//back-end logic
// declare data delimiter for .split method
var period = ".";
//pull string from input
//behavior 1
var string = prompt("QDD.MM.SS");
//behavior 2 - Parse quadrant code
var quadrant = string.slice(0,1);

//behavior 3 - Parse degrees
var parsedInput = string.slice(1);

var splitInput = parsedInput.split(period, 3);
var degrees = splitInput [0];
//behavior 4 - Parse minutes
var minutes = splitInput [1];
//behavior 5 - Parse seconds
var seconds = splitInput [2];
// behavior 6 - display formatted bearing
var quadrantCardinals = ["Error", "N " + degrees + "° " + minutes + "' " + seconds + '"' + " W", "N " + degrees + "° " + minutes + "' " + seconds + '"' + " E", "S " + degrees + "° " + minutes + "' " + seconds + '"' + " E", "S " + degrees + "° " + minutes + "' " + seconds + '"' + " W"];
alert(quadrantCardinals [quadrant]);

//front-end logic
// var quadrantCardinals = ["Error", "North" + bearing + "°" + minutes + "'" + seconds + "''" + "West", "NE", "SE", "SW"]
