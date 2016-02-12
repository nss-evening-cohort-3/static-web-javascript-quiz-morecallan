var width;
var treeDiv = document.getElementById("tree")
treeDiv.style.textAlign="center";

var button = document.getElementById("growTree");
button.addEventListener("click", submitInfo);


function submitInfo() {
    var formTree = {
    height: parseInt(document.getElementById("height").value),
    symbol: document.getElementById("symbol").value     
    };
    console.log(formTree)
    checkShit(formTree);
    return formTree;
}


function checkShit(myTree) {
    if((isNaN(myTree.height) === true) || (myTree.symbol === "")) {
        alert("You must enter a number and a symbol")
    } else {
        buildTree(myTree);
    }
}


function buildTree(tree) {
    for (var i = 0; i < tree.height; i++) {
        width = (i*2) + 1;
        treeDiv.innerHTML += "<p>";
        for (var j = 0; j < width; j++) {
            treeDiv.innerHTML += tree.symbol;
        }
        treeDiv.innerHTML += "</p>";
    }
}       

