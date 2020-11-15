var myName = document.getElementById("stage-name")
myName.style.position = "relative";
myName.style.left = "155px";


var mypar = document.getElementById("my-par");
mypar.style.position = "relative";
mypar.style.left = "150px";
mypar.style.fontSize = "25px"

var box = document.getElementById("my-box")
box.style.position = "relative";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.left = "100px";
box.style.border = "2px solid black";
//background-color: white;
box.style.width = "200px";
box.style.height = "200px";
box.style.margin = "5px";
box.style.padding = "5px";


//The square's color will change Blue when the mouse hovers over the square
function mouseOverBox(){
    box.style.backgroundColor = "blue"
}
box.addEventListener("mouseover", mouseOverBox )

/*This criterion is linked to a Learning OutcomeThe square's color 
will change Red when the mouse button is held down over the square.*/
function mouseDownBox(){
    box.style.backgroundColor = "red"
}
box.addEventListener("mousedown", mouseDownBox )

/*The square's color will change Yellow when the mouse button is let 
go over the square*/
function mouseUpBox(){
    box.style.backgroundColor = "yellow"
}
box.addEventListener("mouseup", mouseUpBox )

/*The square's color will change Green when the mouse is 
double clicked in the square.*/
function mouseDoubleClickBox(){
    box.style.backgroundColor = "green"
}
box.addEventListener("dblclick", mouseDoubleClickBox )

/*The square's color will change Orange when the mouse scroll is used somewhere 
in the window (not just over the square)*/
function mouseWheelBox(){
    box.style.backgroundColor = "orange"
}
box.addEventListener("wheel", mouseWheelBox )
document.body.addEventListener("wheel", mouseWheelBox)

/*You should also be able to press the first letter of the colors 
(typing "r" on the keyboard for "red", for example) and have the box change to that color.*/
function keyMyCode(event) {
    var x = event.keyCode;
    if(x == 66) {
      box.style.backgroundColor = "blue"
    } else if(x == 82) {
        box.style.backgroundColor = "red"
    } else if(x == 89) {
        box.style.backgroundColor = "yellow"
    } else if(x == 71){
        box.style.backgroundColor = "green"
    } else if(x == 79) {
        box.style.backgroundColor = "orange"
    }
  };

document.body.addEventListener("keydown", keyMyCode)
console.log(box)
console.dir(box)