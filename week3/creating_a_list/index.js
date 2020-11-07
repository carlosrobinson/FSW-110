var newHeader = document.createElement("h1")
newHeader.textContent = "Hello World"
document.body.append(newHeader)

for( var i = 0; i < 10; i++) {
    var newH = document.createElement("h1")
    newH.textContent = "Hello World"
    document.body.append(newH)
    newH.style.color = "orange";
    newH.innerHTML.textContent += "Hello World"[i]
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
for( var i = 0; i < names.length; i++) {
    var newUl = document.createElement("ul")
    document.body.append(newUl)
    newUl.innerHTML += "<li>" + names[i] + "</li>"
}