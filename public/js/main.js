// music volume adjust
let audio = document.getElementById("bg");
audio.volume = 0.06;

let easterFound = sessionStorage.getItem("easterFound");

if (easterFound) {
    createEasterItem();
    console.log("Secret is unlocked");
};


function easter() {
    /**
     * This function checks if the elements with IDs `alpha`, `beta`, and `gamma`
     * exist on the page and sets a `sessionStorage` item for each element found.
     * Then it checks if all three elements have been found and if so, plays an audio
     * file, sets another `sessionStorage` item, displays an alert, and reloads the page.
     */

    alpha = document.querySelector('#alpha');
    beta = document.querySelector('#beta');
    gamma = document.querySelector('#gamma');

    if (alpha) {
        console.log(`found alpha`);
        sessionStorage.setItem("alpha", true);
    }
    if (beta) {
        console.log(`found beta`);
        sessionStorage.setItem("beta", true);
    }
    if (gamma) {
        console.log(`found gamma`);
        sessionStorage.setItem("gamma", true);
    }

    const eggs = [sessionStorage.getItem("alpha"), sessionStorage.getItem("beta"), sessionStorage.getItem("gamma")];

    if (eggs.every(Boolean)) {
        const foundAudio = new Audio('https://cdn.discordapp.com/attachments/334598557145366528/1108203307433992232/chest_opening.mp3')
        foundAudio.play();
        sessionStorage.setItem("easterFound", true);

        alert("Você encontrou!")
        location.reload();
    }
}

function createEasterItem() {
    /**
     * Creates an Easter Egg item in the navbar.
     */

    const navbarNav = document.querySelector('.navbar-nav');

    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const title = document.createTextNode('Amandita');

    navItem.classList.add('nav-item');
    navLink.classList.add('nav-link');
    span.classList.add('link-text');

    navLink.setAttribute('href', 'amandita.html');
    img.setAttribute('src', 'assets/icons/amandita.png');

    span.appendChild(title);
    navLink.appendChild(img);
    navLink.appendChild(span);
    navItem.appendChild(navLink);

    navbarNav.appendChild(navItem);
}



