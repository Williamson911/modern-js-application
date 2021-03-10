import { modal } from "./myModal"

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
btn.onclick = function openModal() {
    modal.style.display = "block";
}

export { btn, openModal }