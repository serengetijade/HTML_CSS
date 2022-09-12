//INPUT FORM
function validateForm() {
    let x = document.forms["formName"]["First Name"].value;
    if (x == "") {
        alert("First Name must be filled out.");
        return false;
    }
    let y= document.forms["formName"]["Last Name"].value;
    if (y == "") {
        alert("Last Name must be filled out.");
        return false;
    }
    let em= document.forms["formName"]["Email"].value;
    if (em == "") {
        alert("Email must be filled out.");
        return false;
    }
    let pn= document.forms["formName"]["Phone Number"].value;
    if (pn == "") {
        alert("Phone number must be filled out.");
        return false;
    }
}
//END INPUT FORM