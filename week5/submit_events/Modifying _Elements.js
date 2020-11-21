const form1 = document.getElementById("formMod")
form1.style.position = "relative"
form1.style.display = "flex"
form1.style.flexDirection = "column"

const inPut1 = document.getElementById("first-input")
inPut1.style.position = "relative"
inPut1.style.width = "200px"

const inPut2 = document.getElementById("second-input")
inPut2.style.position = "relative"
inPut2.style.width = "200px"

const inPut3 = document.getElementById("youAge")
inPut3.style.position = "relative"
inPut3.style.width = "50px"

const sumButton = document.getElementById("mybutton")
sumButton.style.position = "relative"
sumButton.style.width = "60px"

form1.addEventListener("submit", (event) => {
        const firstName = document.myForm.firstName.value
        const lastName = document.myForm.lastName.value
        const userAge = document.myForm.userAge.value
        event.preventDefault(alert(firstName + "\n " + "\n " + lastName + "\n" + userAge).rest())

    })


