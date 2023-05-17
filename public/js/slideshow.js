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