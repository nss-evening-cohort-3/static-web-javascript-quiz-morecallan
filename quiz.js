var width;
var treeDiv = document.getElementById("tree");
var button = document.getElementById("growTree");

// Centers tree
treeDiv.style.textAlign="center";

// Adds event listenter to button
button.addEventListener("click", submitInfo);



// Takes inputs and stores them to object then passes them the checking function
function submitInfo() {
    var formTree = {
    height: parseInt(document.getElementById("height").value),
    symbol: document.getElementById("symbol").value     
    };
    checkShit(formTree);
    return formTree;
}

// Checks to make sure the user entered a number and a symbol
function checkShit(myTree) {
    if((isNaN(myTree.height) === true) || (myTree.symbol === "")) {
        alert("You must enter a number and a symbol")
    } else {
        buildTree(myTree);
    }
}

// Builds the damn tree, clearing old one
function buildTree(tree) {
    treeDiv.innerHTML = "";
    for (var i = 0; i < tree.height; i++) {
        width = (i*2) + 1;
        treeDiv.innerHTML += "<p>";
        for (var j = 0; j < width; j++) {
            treeDiv.innerHTML += tree.symbol;
        }
        treeDiv.innerHTML += "</p>";
    }
}       

