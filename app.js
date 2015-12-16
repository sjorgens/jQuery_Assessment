//  When the page loads, have a button on the DOM that says 'generate'. 
//  Upon clicking on that button, append a new container onto the DOM.
//  That container should have two buttons, one that reads 'delete', the
//  other that reads 'change'. Additionally, there should be text that provides
//  a number. The number should be the number of times the 'generate row' button
//  has been clicked.
//
//  The delete button should delete JUST the container that the button is in
//  The change button should change the background-color of the container to red.
//  The default or 'normal' state of the background-color should be yellow.
//  Clicking the button a second time should change it back to yellow, 3rd time
//  red, 4th time yellow, etc. 
//
//  Do not add in anything additional beyond what is required. The goal is not
//  to be clever here, it is simply to execute on the provided instructions.
//
//  Once you are complete, check your work into a new repo and post it on GitHub.
var generateRow = 0;



$(document).ready(function(){
	$("#container").append("<button class='generate'>Generate</button>");
	$("#container").on("click", '.generate', clickGenerate);
	$("#container").on("click", '.delete', deleteContainer);
	$("#container").on("click", '.normal', changeBackground);
});

function clickGenerate(){
	generateRow++;
	console.log(generateRow);
	appendDOM();
}

function appendDOM(){

	$("#container").append("<div class='normal'></div");
	var $el = $("#container").children().last();

	$el.append("<button class='delete'>Delete</button>");
	$el.append("<button class='change'>Change</button>");
	$el.append("<p>Generate Row Count: " + generateRow + "</p>");
}

function deleteContainer(){
	$(this).parent().remove();
}

function changeBackground(){
	$(this).toggleClass("activate");
}