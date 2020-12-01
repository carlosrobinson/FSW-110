var div = document.querySelector("div")
var mouseXyc = document.createAttribute("id")
mouseXyc.value = "new-div"
div.setAttributeNode(mouseXyc)
var mousePosition = document.getElementById("new-div")

function mouseCoordinates(e) {
    var x = e.screenX;
    var y = e.screenY;
    var positionXy = "The X coordinates is: " + x + " and  The Y coordinates is: " + y
    document.getElementById("new-div").innerHTML = positionXy;
  }
  mousePosition.addEventListener("mousemove", mouseCoordinates)