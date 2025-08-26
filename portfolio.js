let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Message = document.getElementById("message");
let button = document.getElementById("btn");

button.onclick = function() {
    let value1 = Name.value;
    let value2 = Email.value;
    let value3 = Message.value;
    if (value1 === "" || value2 === "" || value3 === "") {
        alert("Enter the details");
        return;
    } else {
        alert("Thanks for reaching out! I’ll be in touch shortly.");
        return;
    }
} 

