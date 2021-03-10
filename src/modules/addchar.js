// Adding a new char
async function addChar() {
    document.querySelector("#run").addEventListener("click", async() => {

        const values = inputs.map(({ value }) => value.trim());
        const [name, shortDescription, description] = values;
        const resp = await fetch("https://character-database.becode.xyz/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                shortDescription,
                description,
                image,
            })
        })
        document.location.reload();
    })
};

export { addChar }