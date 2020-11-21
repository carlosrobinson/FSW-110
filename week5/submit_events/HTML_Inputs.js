const myBody = document.getElementById("my-Body")
// myBody.style.position = "relative"
myBody.style.backgroundColor = "blue"

const form = document.getElementById("myForm")
form.style.position = "relative"
form.style.display = "grid"
form.style.margin = "15px"
form.style.height = "400px"
form.style.gidTemplateColumn = "repeat(12, 1fr)"
form.style.gridTemplateRows = "repeat(12, 1fr)"


const mySubmit = document.getElementById("mybutton")
mySubmit.style.position = "relative";
mySubmit.style.display = "inline-block";
mySubmit.style.margin = "25px";
mySubmit.style.width = "100px";
mySubmit.style.top = "10px"

const Name1 = document.getElementById("box-1")
Name1.style.position = "relative";
Name1.style.display = "inline-block";
Name1.style.margin = "5px"
Name1.style.width = "200px"
Name1.style.fontWeight = "bold"

const Name2 = document.getElementById("box-2")
Name2.style.position = "relative";
Name2.style.display = "inline-block";
Name2.style.margin = "5px"
Name2.style.bottomMargin = "15px"
Name2.style.width = "200px"
Name2.style.fontWeight = "bold"

const UserAge = document.getElementById("box-3")
UserAge.style.position = "relative";
UserAge.style.display = "inline-block";
UserAge.style.margin = "30px"
UserAge.style.bottom = "15px"
UserAge.style.right = "30px"
UserAge.style.width = "50px"

const selBox = document.getElementById("mySelect")
selBox.style.position = "relative";
selBox.style.display = "inline-block";
selBox.style.margin = "30px"
selBox.style.right = "30px"
selBox.style.width = "100px"

const myChekBox1 = document.getElementById("chekBox1")
myChekBox1.style.position = "relative";
myChekBox1.style.margin = "10px";
myChekBox1.style.top = "40px";
myChekBox1.style.right = "10px";

const myChekBox2 = document.getElementById("chekBox2")
myChekBox2.style.position = "relative";
myChekBox2.style.margin = "10px";
myChekBox2.style.top = "40px";
myChekBox2.style.right = "10px";

const myChekBox3 = document.getElementById("chekBox3")
myChekBox3.style.position = "relative";
myChekBox3.style.margin = "10px";
myChekBox3.style.top = "40px";
myChekBox3.style.right = "10px";

const myChekBox4 = document.getElementById("chekBox4")
myChekBox4.style.position = "relative";
myChekBox4.style.margin = "10px";
myChekBox4.style.top = "40px";
myChekBox4.style.right = "10px";

console.log("box-2")

form.addEventListener("submit", (event) => {
    const fName = document.myForm.first.value 
    const lName = document.myForm.last.value
    const uAge = document.myForm.yourAge.value
    const gValue = document.myForm.gender.value 
    const wherTo = document.myForm.city.value
    const checkedInput = []
        for(let i = 0; i < myForm.diet.length; i++) {
            if(myForm.diet[i].checked) {
                checkedInput.push(myForm.diet[i].value)
            }
        }
   
    event.preventDefault(alert("First name:"  + " " + fName + "\n" + "Last Name:" + " " + lName + "\n " 
    + "Age:" + uAge +  "\n" + "Gender:" + " " + gValue + "\n" + "Location:" + " " + wherTo + "\n" +
     "Dietary Restrictions:" + " " + checkedInput).reset())
   
})