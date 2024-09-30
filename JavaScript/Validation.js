const form = document.getElementById("forma")
const namea = document.getElementById("nama")
const contactnum = document.getElementById("contactnum")
const emaila = document.getElementById("email")
const pwa = document.getElementById("pw")
const addressa = document.getElementById("address")
const messagea = document.getElementById("msg")
const checka = document.getElementById("check")

form.onsubmit = function(event){
    event.preventDefault();
    const inputname = namea.value;
    if(inputname.length < 4){
        alert("Name cannot be shorter than 4 characters");
        return;
    }
    const inputnum = contactnum.value;
    if(inputnum.length < 10 || inputnum.length > 12){
        alert("The contact number must be between 10 and 12 digit");
        return;
    }
    if(isNaN(inputnum)){
        alert("You need to input a number");
        return;
    }
    const inputemail = emaila.value;
    if(inputemail.indexOf("@gmail.com") === -1){
        alert("You must input a correct emaill address");
        return;
    }
    const inputpw = pwa.value;
    if(inputpw.length < 8){
        alert("Password must be more than 8 characters");
        return;
    }
    const inputadd = addressa.value;
    if(inputadd.length < 1){
        alert("Please input your address");
        return;
    }
    const inputmsg = messagea.value;
    if(inputmsg.length < 1){
        alert("Please give us your message");
        return;
    }
    const inputcheck = checka.checked;
    if(!inputcheck){
        alert("Please check the box first");
        return;
    }
    alert("Success")
}
