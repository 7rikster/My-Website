

// Contact message submit

let submitBtn = document.querySelector("#send-message");
let inputs = document.querySelectorAll(".contact-inputs");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    for(let i=0; i<3; i++){
        inputs[i].value = '';
    };
    alert("Message sent successfully!");
});