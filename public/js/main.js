// auto nav link highlighter
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
});

// music volume adjust
let audio = document.getElementById("bg"); 
audio.volume = 0.06;


// slideshow
const slideshow = document.querySelector('#slide');
const image = slideshow.querySelectorAll('img');
const imgCount = slideshow.querySelector('#count')
let counter = 0;

// start setup
imgCount.innerHTML = `${counter + 1} of ${image.length}`
image[counter].style.display = `block`;

// clickable arrows
function changeImage(indicator) {
    image[counter].style.display = `none`;
    counter = (counter + (indicator > 0 ? indicator : indicator + image.length)) % image.length; // wtf?
    // console.log(counter);
    image[counter].style.display = `block`;

    imgCount.innerHTML = `${counter + 1} of ${image.length}`
}