// JavaScript Document
let listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", checkIt);
}

function checkIt(e) {
	if (e.target.style.textDecoration === "line-through") {
		e.target.style.textDecoration = "none";
	} else {
		e.target.style.textDecoration = "line-through";
	}
}
