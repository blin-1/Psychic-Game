var wins = 0;
var losses = 0;
var lives = 9;
var picks = [];
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var secret;
var pick;

function compChoice (){

	return alphabet[Math.round(Math.random()*23)];

};

function keyPress (event){
	
	displayError("");
	pick = String.fromCharCode(event.keyCode).toUpperCase();

	if (picks.indexOf(pick) > -1){
		displayError("You\'ve already tried " + "'" + pick + "'" + "! Try a different letter!");
		return;
	};

	picks.push(pick);
	document.getElementById("guesses").innerHTML = picks;
	
	if (pick == secret) {
		wins++;
		reset();
	}else{
		lives--;
		if (lives === 0){
			losses++;
			reset();
		};

	}
	updateScreen();
};


function reset(){

	picks = [];
	lives = 9;
	secret = compChoice();
	// console.log(secret);
};


function updateScreen(){
	
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guesses").innerHTML = picks;
	document.getElementById("lives").innerHTML = lives;
	document.getElementById("wins").innerHTML = wins;
};


function displayError (error){
	document.getElementById("errors").innerHTML = error;
};


function execute (){

	secret = compChoice();
	document.onkeypress = keyPress;
	// For Cheaters & Testers
	// console.log(secret);
};

window.onload = execute;
