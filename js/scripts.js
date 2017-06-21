//back-end logic
// declare data delimiter for .split method
var period = ".";
//pull string from input
var string = prompt("QDD.MM.SS");
//behavior 1 - Parse quadrant code
var quadrant = string.slice(0,1);
alert(quadrant);
//behavior 2 - Parse degrees
var parsedInput = string.slice(1);
alert(parsedInput);
var splitInput = parsedInput.split(period, 3);
alert(splitInput [0]);
//behavior 3 - Parse minutes
alert(splitInput [1]);
//behavior 4 - Parse seconds
alert(splitInput [2]);


//front-end logic
