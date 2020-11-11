//A navbar with links
var newNav = document.createElement("nav")
document.body.append(newNav)

//First link
var newLink1 = document.createElement("link")
var newA1 = document.createElement("a")
newA1.textContent = "My Nav Link 1"
newLink1.appendChild(newA1)
// Second link
var newLink2 = document.createElement("link")
var newA2 = document.createElement("a")
newA2.textContent = "My Nav Link 2"
newLink2.appendChild(newA2)
//Third link
var newLink3 = document.createElement("link")
var newA3 = document.createElement("a")
newA3.textContent = "My Nav Link 2"
newLink3.appendChild(newA3)

newNav.appendChild( newLink1 )
newNav.appendChild( newLink2 )
newNav.appendChild( newLink3 )



//An h1 tag
var newHead = document.createElement("h1")
newHead.textContent = "My Header"
document.body.append(newHead)

//A p tag
var newParagraph = document.createElement("p")
newParagraph.textContent = "My Paragraph"
document.body.append(newParagraph)

//A list
var newOrderedList = document.createElement("ol")
document.body.append(newOrderedList)
var newlist1 = document.createElement("li")
newlist1.textContent = "My list1"
var newlist2 = document.createElement("li")
newlist2.textContent = "My list2"
var newlist3 = document.createElement("li")
newlist3.textContent = "My list3"
newOrderedList.appendChild( newlist1 )
newOrderedList.appendChild( newlist2 )
newOrderedList.appendChild( newlist3 )

//A Footer
var newFooter = document.createElement("footer")
newFooter.textContent = "My Footer"
document.body.append(newFooter)

console.log(document)