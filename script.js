const button1 = document.getElementById("one");
const button2 = document.getElementById("two");

let title = document.querySelector(".titre-mission");
let date = document.querySelector(".date");
let investigateur = document.querySelector(".investig");
let but = document.querySelector(".but");
let lien = document.querySelector(".lien")
let image = document.querySelector(".fusee")

// TXT MISSION APOLLO/
let title_apollo = "Mission : APOLLO 11"
let date_apollo = "DATE : 16 juillet 1969 – 24 juillet 1969"
let investigateur_apollo = "Investigateur : Les investigateurs principaux de la mission Apollo 11 étaient la NASA et ses ingénieurs et scientifiques. Les astronautes étaient Neil Armstrong (commandant), Buzz Aldrin (pilote du module lunaire), et Michael Collins (pilote du module de commande)."
let but_apollo = "But : La mission Apollo 11, réalisée le 20 juillet 1969, avait pour objectif principal d'accomplir le premier alunissage humain dans le cadre de la course à l'espace entre les États-Unis et l'URSS. L'équipage était composé de Neil Armstrong (commandant), Buzz Aldrin (pilote du module lunaire) et Michael Collins (pilote du module de commande). Armstrong et Aldrin ont aluni à bord du module lunaire Eagle dans la mer de la Tranquillité, tandis que Collins restait en orbite autour de la Lune à bord du module de commande Columbia. <br> <br>Neil Armstrong fut le premier homme à poser le pied sur la Lune, déclarant la célèbre phrase : 'C'est un petit pas pour l'homme, un bond de géant pour l'humanité'. Avec Aldrin, ils ont marché environ 2 heures et 15 minutes, installé des équipements scientifiques comme le sismomètre et un réflecteur laser, pris des photographies, et collecté 21,5 kg d'échantillons lunaires pour analyse. <br> La réussite d'Apollo 11 a démontré la supériorité technologique américaine à l'époque et marqué un tournant historique dans l'exploration spatiale."
let lien_apollo = "https://www.nasa.gov/mission/apollo-11/"
let image_apollo = "./assets/Mission/apollo11.png"

// TXT MISSION SPOUTNIK
let title_spoutnik = "Mission : SPOUTNIK"
let date_spoutnik = "DATE : 4 octobre 1957"
let investigateur_spoutnik = "Investigateur : Les principaux investigateurs étaient des scientifiques soviétiques dirigés par Sergueï Korolev, un ingénieur en aérospatiale de premier plan."
let but_spoutnik = "But : La mission Spoutnik, initiée par l'Union soviétique, fut un événement marquant dans l'histoire de l'humanité et de l'exploration spatiale. Lancé le 4 octobre 1957, le satellite Spoutnik-1 devint le premier objet artificiel à être placé en orbite terrestre, marquant ainsi le début de l'ère spatiale. Ce lancement avait pour objectif de démontrer la supériorité technologique et scientifique soviétique dans le contexte de la Guerre froide et de la compétition acharnée avec les États-Unis pour la domination spatiale. Ce petit satellite sphérique de 58 centimètres de diamètre pesait environ 83,6 kilogrammes et transportait quatre antennes qui émettaient des signaux radio simples mais audibles depuis la Terre. <br> <br> Le lancement de Spoutnik-1 avait plusieurs objectifs scientifiques et techniques : tester la technologie des lanceurs, analyser la trajectoire orbitale pour recueillir des données sur la densité de l'atmosphère supérieure, évaluer le comportement des objets artificiels dans l'espace et démontrer la capacité de maintenir une communication radio depuis l'orbite. Les signaux émis, captés par des stations terrestres dans le monde entier, ont permis de valider la faisabilité des communications spatiales."
let lien_spoutnik = "https://fr.wikipedia.org/wiki/Spoutnik#:~:text=Spoutnik%20(du%20russe%20%3A%20%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%2C,d%C3%A9but%20de%20l'%C3%A8re%20spatiale."
let image_spoutnik = "./assets/Mission/spoutnik.png"

button1.addEventListener("click", () => {
    if (button1.classList.contains("active")) {
        alert("Ce dernier a deja été selectionné")
    }
    else {
        button1.classList.add("active")
        button2.classList.remove("active")
        let title = document.querySelector(".titre-mission").innerHTML = title_apollo
        let date = document.querySelector(".date").innerHTML = date_apollo
        let investigateur = document.querySelector(".investig").innerHTML = investigateur_apollo
        let but = document.querySelector(".but").innerHTML = but_apollo
        let lien = document.querySelector(".lien").href = lien_apollo
        let image = document.querySelector(".fusee").src = image_apollo

    }
})
button2.addEventListener("click", () => {
    if (button2.classList.contains("active")) {
        alert("Ce dernier a deja été selectionné")
    }
    else {
        button2.classList.add("active")
        button1.classList.remove("active")
        let title = document.querySelector(".titre-mission").innerHTML = title_spoutnik
        let date = document.querySelector(".date").innerHTML = date_spoutnik
        let investigateur = document.querySelector(".investig").innerHTML = investigateur_spoutnik
        let but = document.querySelector(".but").innerHTML = but_spoutnik
        let lien = document.querySelector(".lien").href = lien_spoutnik
        let image = document.querySelector(".fusee").src = image_spoutnik
    }
})

// defilement menu variables
const btn_accueil = document.getElementById("accueil")
const btn_concept = document.getElementById("concept")
const btn_mission = document.getElementById("mission")
const btn_enjeux = document.getElementById("enjeux")

function DefilementLiens(elementId) {
    document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth'
    });
}

btn_accueil.addEventListener("click", () => {
    DefilementLiens("section1");
})

btn_concept.addEventListener("click", () => {
    DefilementLiens("section2");
})

btn_mission.addEventListener("click", () => {
    DefilementLiens("section3");
})

btn_enjeux.addEventListener("click", () => {
    DefilementLiens("section4");
})



