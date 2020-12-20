let content;
window.addEventListener("load", sidenVises);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function sidenVises() {
    console.log("sidenVises");
}

//Link til Json data af alle WP sider + side id variabel som er oprettet i hvert html dokument
const link = "http://vais.dk/kea/02_SEM/eksamen/wordpress/wp-json/wp/v2/pages/" + id;

document.addEventListener("DOMContentLoaded", hentData);

//Når Json data er modtaget, klones html section på hvert html dokument og indholdet fra Json lægges ind vha. link og id variablen
async function hentData() {
    const respons = await fetch(link);
    content = await respons.json();
    console.log(content.title.rendered);
    console.log(content.content.rendered);
    document.querySelector("section").innerHTML = content.content.rendered;
    document.querySelector("h1").textContent = content.title.rendered;

}
