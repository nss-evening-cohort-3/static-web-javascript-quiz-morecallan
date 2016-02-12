var width;
var treeDiv = document.getElementById("tree")
treeDiv.style.textAlign="center";


function submitInfo() {
    var formTree = {
    height: parseInt(document.getElementById("height").value),
    symbol: document.getElementById("symbol").value     
    };
    checkShit(formTree);
    return formTree;
}

function checkShit(formTree) {
    if((formTree.height === NaN) || (formTree.symbol === "")) {
        alert("You've gotta fill in a number for height!");
    } else {
        buildTree(formTree);
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

