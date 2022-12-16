// auto nav link highlighter
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
});

// music volume adjust
let audio = document.getElementById("bg"); 
audio.volume = 0.06;