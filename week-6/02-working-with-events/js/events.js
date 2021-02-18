// JavaScript Document

// STEP ONE: We store a reference to the button inside a constant called changeButton, using the getElementById function and specifying the ID of the element we want to target
const changeButton = document.getElementById("change");

//STEP TWO - We will also be working with the body, so let's store a reference to that to

const body = document.querySelector("body");

//STEP THREE - We create a function that will allow us to generate and return a random number - which we'll use to create a random hex value later on

function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

//STEP FOUR - now we are going to register the event handler using the onclick event handler property

//We are listening for the click event firing, by setting the onclick event handler property to equal an anonymous function containing code that generates a random RGB color and sets the <body> background-color equal to it.

//this will run everytime the user clicks on the change button

changeButton.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  body.style.backgroundColor = rndCol;
}

// STEP FIVE - we can also use an addEventListener method to accomplish the same thing (although the syntax is a little different )

/*changeButton.addEventListener("click", function () {
	const rndCol =
		"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
	body.style.backgroundColor = rndCol;
});*/

//STEP SIX - addEventListeners are a little more powerful, it also means that we can attach two different functions to two different events

/*function sayHello() {
	alert("Hellllllllllo!");
}

function randoColour() {
	const rndCol =
		"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
	body.style.backgroundColor = rndCol;
}*/

//with event handlers, no can do
//changeButton.onclick = sayHello;
//changeButton.onclick = randoColour;

/* lets try with addEventListener(); */

/*changeButton.addEventListener('click', sayHello);
changeButton.addEventListener('click', randoColour);*/

//STEP SEVEN - it doesn't have to be an anonymous function

/*function randoColour() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  body.style.backgroundColor = rndCol;
} */

//changeButton.onclick = randoColour;

//or

//changeButton.addEventListener('click', randoColour);

//STEP EIGHT - what about the whole event object thing? Let's change our function slightly and see

/*function randoColour(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
}*/

//* preventdefault - look at access code code from last week, remove the preventdefault and see what happens */
