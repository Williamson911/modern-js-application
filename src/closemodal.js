import { modal } from "./myModal"
// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeModal(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

export { closeModal }