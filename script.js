var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btnn=document.createElement("button");
	btnn.appendChild(document.createTextNode("delete"));
	li.appendChild(btnn);
 	btnn.onclick = removeParent;
}

function listLength(){
	return listItems.length;
}

function removeParent(){
	this.parentNode.remove()
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function deleteItems(){
	var item = event.target
	var parent = event.target.parentElement
}

for ( var i =0; i<listItems.length;i++) {
	document.querySelectorAll("remove",deleteItems)
}

function listLength(){
	return listItems.length;
}

listItems.forEach(function(i) {
	var btnn=document.createElement("button");
	btnn.appendChild(document.createTextNode("delete"));
	i.appendChild(btnn);
 	btnn.onclick = removeParent;
})