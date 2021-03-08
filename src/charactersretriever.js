// Characters retriever 
getData();
const tpl = document.querySelector("#tpl-hero");
const target = document.querySelector("#target");

async function getData() {

    try {
        const hero = await fetch("https://character-database.becode.xyz/characters");
        const object = await hero.json();

        object.forEach(({ description, id, image, name, shortDescription }) => {
            const elt = tpl.cloneNode(true).content;

            elt.querySelector(".card-title").innerText = name;
            elt.querySelector(".card-text").innerText = shortDescription;
            elt.querySelector(".img-card").src = `data:image/*;base64,${image}`;

            target.appendChild(elt);
            getId.push(id);
            delData();
        });
        console.log(object);
    } catch (err) {
        console.error(err);
    }
}