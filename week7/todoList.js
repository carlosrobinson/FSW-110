//Form
var myForm = document.getElementById("Form1")
myForm.style.position = "relative";
myForm.style.display = "flex";
myForm.style.flexDirection = "column"
myForm.style.margin = "20px" 
myForm.style.width = "200px"

//Submit Button
var myButton = document.getElementById("mySubmit") 
myButton.style.width = "50px";
myButton.style.marginTop = "10px"

//Reset Button
var myButton2 = document.getElementById("myRest")
myButton2.style.position = "relative";
myButton2.style.margin = "20px";
myButton2.style.bottom = "30px"

//DIV 
var myDiv = document.getElementById("myOutput")
myDiv.style.position = "relative";
myDiv.style.border = "1px solid black"
myDiv.style.margin = "20px";
myDiv.style.width = "200px";
myDiv.style.height = "100px";
myDiv.style.color = "blue";
myDiv.style.backgroundColor = "orange"

//Body
var bodyId = document.getElementById("myBody")
bodyId.style.backgroundColor = "blue"


// Form- the form will clear inputs and the user’s text will 
// show up in the list below the form.
myForm.addEventListener("submit", function (event) {
    const fulName = document.myToDo.box1.value;
    const subName = document.myToDo.box2.value;
    const studyT = document.myToDo.box3.value;
    var input = "Your Name: " +  fulName + "\n Subject Name: " + subName + "\nStudy Time: " + studyT
    event.preventDefault() 
    myForm.reset()
    document.getElementById("myOutput").textContent = input;
})  

function clearDiv() {
    document.getElementById("myOutput").textContent = "";
}