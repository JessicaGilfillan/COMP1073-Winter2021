// JavaScript Document
// create a variable to store a reference to the more button 

//what are two ways to target the more button ?
//which is faster? 

let moreButton = document.getElementById('more');

//create a function to append text 

function addText() {
  //target the main element 
  let main = document.querySelector('main');
  //create a new div 
  let newDiv = document.createElement('div');
  //create a variable called message and store string inside 
  let message = '<h2> Important Event Concepts </h2> <ul>   <li> <em>Event handler</em> : code that runs when an event happens (usually a function defined by the developer) </li><li><em>Registering an event handler </em> : the term used when we define a block of code that will run when the event happens </li><li> <em> Event Listener </em> : sometimes used interchangeably with event handler (although these two work together). An event listener listens for an event to occur </li></ul> '; 
  //set the innerHTML of the div to what is stored in message 
  newDiv.innerHTML = message; 
  //append the new div to the main element
  main.appendChild(newDiv); 
}

//create a function to display message 

function noProb() {
  alert('No Prob, Bob!'); 
}

// register the event handler, because we want two functions to be triggered on the same element and the same event, use addEventListener 

moreButton.addEventListener('click', addText);
moreButton.addEventListener('click', noProb); 



//how can we trigger the noProb function on screen resize? 

function noProb() {
  alert('No Prob, Bob!'); 
}

window.onresize = function() {
  body.style.backgroundColor = 'red'; 
}; 
