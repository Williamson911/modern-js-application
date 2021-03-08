// Delete a character 
function delData() {
    Array.from(document.querySelectorAll(".deleteHero")).forEach((btn, index) => {
        btn.addEventListener("click", async() => {
            console.log("toto");
            const conf = confirm("Are you sure you want to delete this character ? ");
            const id = getId[index];
            if (conf) {
                await fetch("https://character-database.becode.xyz/characters/" + id, {
                    method: "DELETE",
                    headers: ({
                        "Content-type": "application/json",
                    }),
                })
            }
            document.location.reload();
        })
    });

}

function updateData() {
    Array.from(document.querySelector("editHero")).forEach((btn, index) => {
        btn.addEventListener("click", () => {

        })
    });
}

document.querySelector("#edit").addEventListener("click", () => {

})