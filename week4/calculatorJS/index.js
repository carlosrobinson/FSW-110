// Add two numbers.
var body = document.getElementById("body")
body.style.margin = "20px"
body.style.padding = "20px"


var addNum = document.getElementById("add-div")
addNum.style.border = "1px solid black"
addNum.style.padding = "50px"
addNum.style.width = "200px"
addNum.style.height = "100px"
addNum.style.backgroundColor = "blue";
addNum.style.position = "relative";
addNum.style.display = "inline-block";

var firstAddNum1 = document.getElementById("a-num").value
var secondAddNum2 = document.getElementById("b-num").value
var addButton = document.getElementById("button-add")
function myAdd() {
    var a = Number(document.getElementById("a-num").value)
    var b = Number(document.getElementById("b-num").value)
    var c = a + b;
    document.getElementById("add-div").innerHTML = c;
}
addButton.addEventListener("click", myAdd )


// Subtract two Numbers
var subNum = document.getElementById("sub-div")
subNum.style.border = "1px solid black"
subNum.style.padding = "50px"
subNum.style.width = "200px"
subNum.style.height = "100px"
subNum.style.backgroundColor = "red";
subNum.style.position = "relative";
subNum.style.display = "inline-block";

var firstNum2 = document.getElementById("d-num").value
var secondNum3 = document.getElementById("e-num").value
var subButton = document.getElementById("button-sub")
function mySub() {
    var d = Number(document.getElementById("d-num").value)
    var e = Number(document.getElementById("e-num").value)
    var f = d - e;
    document.getElementById("sub-div").innerHTML = f;
}
subButton.addEventListener("click", mySub )

// Multiply two Numbers
var mulNum = document.getElementById("mul-div")
mulNum.style.border = "1px solid black"
mulNum.style.padding = "50px"
mulNum.style.width = "200px"
mulNum.style.height = "100px"
mulNum.style.backgroundColor = "green";
mulNum.style.position = "relative";
mulNum.style.display = "inline-block";

var firstNum4 = document.getElementById("g-num").value
var secondNum5 = document.getElementById("h-num").value
var mulButton = document.getElementById("button-mul")
function myMul() {
    var g = Number(document.getElementById("g-num").value)
    var h = Number(document.getElementById("h-num").value)
    var i = g * h;
    document.getElementById("mul-div").innerHTML = i;
}
mulButton.addEventListener("click", myMul )


