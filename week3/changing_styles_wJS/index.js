for(var i = 0; i < 5; i ++) {
    var myH1 = document.createElement("h1")
    myH1.textContent = " My Five Headers "
    myH1.style.fontSize = " 20px "
    myH1.style.fontWeight = " ligher "
    myH1.style.fontFamily = " sans-serif "
    myH1.style.color = " cornflowerblue "
    myH1.innerHTML.textContent += " My Five Headers "
    document.body.appendChild(myH1).classList.add( ".border")
}

//document.querySelector("myH1")