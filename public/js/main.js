// music volume adjust
let audio = document.getElementById("bg"); 
audio.volume = 0.06;

// calculate age
const ageElement = document.querySelector('#age');
let age = getAge('2003-04-08')
ageElement.innerHTML = age;


// slideshow
const slideshow = document.querySelector('#slide');
const image = slideshow.querySelectorAll('img');
const imgCount = slideshow.querySelector('#count')
let counter = 0;

// start setup
imgCount.innerHTML = `${counter + 1} of ${image.length}`
image[counter].style.display = `block`;


function changeImage(indicator) {
    /**
     * Changes the displayed image based on the indicator value.
     *
     * @param {number} indicator - Determines which direction to change the image.
     *                             Positive numbers move forward, negative numbers move backward.
     * @return {void}
     */

    image[counter].style.display = `none`;
    counter = (counter + (indicator > 0 ? indicator : indicator + image.length)) % image.length; // wtf?
    image[counter].style.display = `block`;

    imgCount.innerHTML = `${counter + 1} of ${image.length}`
}

function getAge(dateString) {
    /**
     * Calculate the age based on a given birth date.
     * https://stackoverflow.com/a/7091965
     * 
     * @param {string} dateString - A string representing the birth date in the format yyyy-mm-dd.
     * @returns {number} - The age calculated from the birth date.
     */

    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}