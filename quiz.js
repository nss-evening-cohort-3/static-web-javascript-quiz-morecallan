var width;
var characterWidth;
var spaceWidth;
var damnTree = "";
var button = document.getElementById("growTree");


// Adds event listenter to button
button.addEventListener("click", submitInfo);



// Takes inputs and stores them to object then passes them the checking function
function submitInfo() {
    var formTree = {
    height: parseInt(document.getElementById("height").value),
    symbol: document.getElementById("symbol").value     
    };
    checkShit(formTree);
}

// Checks to make sure the user entered a number and a symbol
function checkShit(myTree) {
    if((isNaN(myTree.height) === true) || (myTree.symbol === "")) {
        alert("You must enter a number and a symbol")
    } else {
        buildTree(myTree);
    }
}

//Builds up tree then console logs it.  
function buildTree(tree) {
    width = (2*tree.height) - 1;
    for (var i = 0; i < tree.height; i++) {
        characterWidth = (i*2) + 1;
        spaceWidth = (width - characterWidth)/2;
        for (var j = 0; j < spaceWidth; j++) {
            damnTree += " ";
        }
        for (var x = 0; x < characterWidth; x++) {
            damnTree += tree.symbol;
        }
        for (var y = 0; y < spaceWidth; y++) {
            damnTree += " ";
        }
        damnTree += "\n"
    }

    console.log(damnTree);
}
