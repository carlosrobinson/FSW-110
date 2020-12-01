// make the box disapear when the user clicks it
var div1 = document.querySelector("div")
var div2 = document.createAttribute("id")
div2.value = "new-div"
div1.setAttributeNode(div2)
var myDiv = document.getElementById("new-div")


function disapearingBox() {
    myDiv.style.backgroundColor = "white" 
    
}
myDiv.addEventListener("mousedown", disapearingBox)

function reapearingBox() {
    myDiv.style.backgroundColor = "#ef8989" 
    
}
myDiv.addEventListener("mouseup", reapearingBox)