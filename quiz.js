var treeTrial = document.getElementById("tree");

var user = prompt("Enter the height of your tree.")
var userInput = parseInt(user);

var character = prompt("Enter the character you want to make a tree out of.")

var width;

for (var i = 0; i < userInput; i++) {
    width = (i*2) + 1;
    treeTrial.innerHTML += "<p>";
    for (var j = 0; j < width; j++) {
        treeTrial.innerHTML += character;
    }
    treeTrial.innerHTML += "</p>";
}