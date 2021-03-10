import { modal } from "./myModal"
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function clodeBtn() {
    modal.style.display = "none";
}

export { span, clodeBtn }