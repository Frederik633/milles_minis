let content;
/*let container = document.querySelector("#container");
let temp = document.querySelector("template");*/

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    /* document.querySelector(".menuknap").addEventListener("click", toggleMenu);*/

}

const link = "http://vais.dk/kea/02_SEM/eksamen/wordpress/wp-json/wp/v2/pages/" + id;

document.addEventListener("DOMContentLoaded", hentData);


async function hentData() {
    const respons = await fetch(link);
    content = await respons.json();
    console.log(content.title.rendered);
    console.log(content.content.rendered);
    document.querySelector("section").innerHTML = content.content.rendered;
    document.querySelector("h1").textContent = content.title.rendered;

}
