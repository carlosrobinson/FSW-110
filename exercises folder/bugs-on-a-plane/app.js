var form = document.getElementById("arline-form");
var submit  = document.getElementById("submit");
//var query = document.querySelector;

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travellocation.value;
    var diet = [];
    if (form.vegan.checked) {
         diet.push(document.getElementById("vegan").value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById("gluten").value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById("paleo").value);
    }


    alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + " Gender: " + gender + "\n" + "Travel Location: " + location + "\n" + " Diet: " + diet + "\n" + "Awesome, now if you die, it won't be an accident..");
}


submit.addEventListener("submit", formAlert());