// JavaScript Document
//select the element that we want to work with
let input = document.getElementById("access");
let submit = document.getElementById("submit");
let section = document.querySelector(".accessCode");
let h2 = document.querySelector(".accessCode h2");
let a = document.querySelector(".accessCode a");
let para1 = document.querySelector(".accessCode p");
let para2 = document.querySelector(".accessCode p + p");
para2.style.backgroundColor = "#fff";
para2.style.color = "#000";
let iframe = document.querySelector("iframe");
iframe.width = "800";
iframe.height = "600";
iframe.style.display = "none";
iframe.allowFullscreen = "true";

submit.addEventListener("click", accessCode);

function accessCode(e) {
	// what does e stand for?
	e.preventDefault(); //what does this do?
	let userEntry = input.value;
	let userAccess = parseInt(userEntry);

	if (userAccess === 1234) {
		h2.textContent = "Activity One Challenge - Picture The DOM";
		para1.innerHTML =
			'We now know that when a browser loads a page, it creates a model of that page and stores it in memory. This is the Document Object Model (DOM). The DOM is an API that allows us to use JavaScript (although we could use another other language to) to interface with the HTML page. For this challenge, go to <a href="https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/01-picture-the-dom"> https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/01-picture-the-dom </a> and download the HTML provided. Using an online drawing program or even good ol\' paper and pencil, draw the Document Object Model that would be created when this page is loaded in the browser. <strong>This is Part One of your Lab for this week :)</strong>';
		para2.innerHTML =
			"The access code for your next activity is <span>8893</span>";
		iframe.style.display = "block";
		iframe.style.margin = "0 auto";
		iframe.src =
			"https://screencast-o-matic.com/player/cY1hYMpWDR?ff=1&title=0&controls=1";
	} else if (userAccess === 8893) {
		h2.textContent = "Activity Two Challenge - Node or Not? ";
		para1.innerHTML =
			'Each node in the DOM tree is an object with methods and properties. The document, elements, pieces of text and even whitespace in the HTML is represented by it’s own DOM node. For this challenge, navigate to <a href="https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/02-node-or-not-a-node"> https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/02-node-or-not-a-node </a> and download the code provided. Identify each node with a comment and then include a number at the bottom detailing the total amount of nodes on the page (comments not included.) <strong>This is Part Two of Lab 2.</strong> ';
		para2.innerHTML =
			"The access code for your next activity is <span>120521</span>";
		iframe.style.display = "block";
		iframe.style.margin = "0 auto";
		iframe.src =
			"https://screencast-o-matic.com/player/cY1hrupWZV?ff=1&title=0&controls=1";
	} else if (userAccess === 120521) {
		h2.textContent = "Activity Three Challenge : Select That Element";
		para1.innerHTML =
			'There are a few different methods and properties that allow us to access elements. Dom queries may return one element or they can return a nodeList, which is a collection of nodes. Sometimes you want just one element. Sometimes you want a group of elements (i.e. every h2 on the page). Which one is best? We generally want to find the quickest way to access an element as this helps with performance( i.e. our page will be faster and more responsive - yay!). This means evaluating the minimum number of nodes on the way to get the element you want to work with. For example, getElementById() is the fastest, because no two elements can have the same ID on a page.  navigate to <a href="https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/03-select-that-element">https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/03-select-that-element</a> and download the code files. Your instructions are in main.js. <strong>This is Part Three of your lab for this week :)</strong>';
		para2.innerHTML =
			"The access code for your next activity is <span>44</span>";
		iframe.style.display = "block";
		iframe.style.margin = "0 auto";
		iframe.src =
			"https://screencast-o-matic.com/player/cY1hrMpWut?ff=1&title=0&controls=1";
	} else if (userAccess === 44) {
		h2.textContent = "Activity Four Challenge: Walk The DOM ";
		para1.innerHTML =
			'Because we are creating webpages and applications that are dynamic, we often need to walk or traverse the DOM in order to get to the element that we really want to target. When you have an element node, you can select another element node in relation to it using different properties. In order to traverse the DOM, we need to have a good understanding of the relationship between elements (i.e. parent elements, children elements, descendants, ancestors, siblings etc.) When traversing the DOM, remember that it’s not just elements that are considered to be nodes in the DOM tree, In fact,  most browsers (except IE) treat whitespace between elements as a text node, so properties might return unexpected nodes if there is whitespace in your HTML . For this challenge,  navigate to <a href="https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/04-walk-the-dom"> https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/04-walk-the-dom </a> and download the code files. Your instructions are in main.js. <strong>This is Part Four for Lab 2 :) </strong> ';
		para2.innerHTML =
			"The access code for your next activity is <span>8888</span>";
		iframe.style.display = "block";
		iframe.style.margin = "0 auto";
		iframe.src =
			"https://screencast-o-matic.com/player/cY1h3cpWUA?ff=1&title=0&controls=1";
	} else if (userAccess === 8888) {
		h2.textContent =
			"Activity Five: Changing Properties & Master of DOM Manipulation ";
		para1.innerHTML =
			'Once we can access the right element, we can start to manipulate or change the properties of these elements. We can also add and remove DOM nodes and get and set attributes on our elements. navigate to <a href="https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/05-master-of-dom-manipulation">https://github.com/JessicaGilfillan/AllAboutTheDOM/tree/master/active-learning/05-master-of-dom-manipulation</a> and download the code files. Your instructions are in main.js. <strong> This is Part 5 of Lab 2. All done!!!! Zip all files (include your image file from activity one) and submit for Lab 2! </strong>';
		para2.innerHTML = "";
		iframe.style.display = "block";
		iframe.style.margin = "0 auto";
		iframe.src =
			"https://screencast-o-matic.com/player/cY1h3hpWvT?ff=1&title=0&controls=1";
	} else {
		h2.textContent = "Usercode not found";
		p.textContent = "this code was not found";
	}
}
