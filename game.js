
var wins;
var losses;
var guesses;
var alphabet [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var picks [];


function compChoice (alphabet){
	var returnValue = Math.random()*23;
	console.log(returnValue);
	return returnValue;
};

function userChoice (){
	
};
// var index = compChoice (alphabet);
// var secretLetter = alphabet[index];
var secretLetter = alphabet[compChoice (alphabet)];



window.onload=compChoice;
