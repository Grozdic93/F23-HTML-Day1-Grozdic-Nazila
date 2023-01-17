
let contact = document.querySelector("#animate");
contact.tagName = "Contact"
contact.addEventListener("click", popMsg);
function popMsg() {
    contact.innerHTML = `dusgrozdic@gmail.com <br> tel : +43 6766822853`;
    contact.style.fontSize = "3rem";
    contact.style.textAlign = "center";



}


