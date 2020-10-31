//Appended H1 Element//
var newHead = document.createElement("h1")
newHead.textContent = "Welcome to my JS site"
document.body.append(newHead)

//Apended P Element//
var newParagraph = document.createElement("p")
newParagraph.textContent = "All of this was created with Javascript"
document.body.append(newParagraph)

//Appended OL Element with three li's//
var newOl = document.createElement("ol")
document.body.append(newOl)
var newLi1 = document.createElement("li")
var newLi2 = document.createElement("li")
var newLi3 = document.createElement("li")
newLi1.textContent = "List 1"
newLi2.textContent = "List 2"
newLi3.textContent = "List 3"
newOl.appendChild(newLi1)
newOl.appendChild(newLi2)
newOl.appendChild(newLi3)