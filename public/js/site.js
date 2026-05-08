(function () {
  var eggIds = ['alpha', 'beta', 'gamma'];

  function getSessionValue(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setSessionValue(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      // file:// can deny storage; page must keep rendering.
    }
  }

  function revealEasterNav() {
    document.querySelectorAll('[data-easter-nav="true"]').forEach(function (item) {
      item.hidden = false;
    });
  }

  function initAudio() {
    var audio = document.getElementById('bg');
    if (!audio) {
      return;
    }

    audio.volume = Number(audio.dataset.audioVolume || 0.06);
  }

  function getAge(dateString) {
    var birthDate = new Date(dateString);
    var now = new Date();
    var age = now.getFullYear() - birthDate.getFullYear();
    var monthDiff = now.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
      age -= 1;
    }

    return age;
  }

  function initAge() {
    document.querySelectorAll('[data-age-birth]').forEach(function (ageElement) {
      ageElement.textContent = String(getAge(ageElement.dataset.ageBirth));
    });
  }

  function initSlideshows() {
    document.querySelectorAll('[data-slideshow="true"]').forEach(function (slideshow) {
      var images = Array.prototype.slice.call(slideshow.querySelectorAll('img'));
      var count = slideshow.querySelector('[data-slide-count="true"]');
      var prev = slideshow.querySelector('[data-slide-prev="true"]');
      var next = slideshow.querySelector('[data-slide-next="true"]');
      var index = 0;

      function render() {
        images.forEach(function (image, imageIndex) {
          image.style.display = imageIndex === index ? 'block' : 'none';
        });

        if (count) {
          count.textContent = String(index + 1) + ' of ' + String(images.length);
        }
      }

      function change(delta) {
        index = (index + delta + images.length) % images.length;
        render();
      }

      if (!images.length) {
        return;
      }

      if (prev) {
        prev.addEventListener('click', function () {
          change(-1);
        });
      }

      if (next) {
        next.addEventListener('click', function () {
          change(1);
        });
      }

      render();
    });
  }

  function initEasterEgg() {
    if (getSessionValue('easterFound') === 'true') {
      revealEasterNav();
    }

    document.querySelectorAll('[data-egg-id]').forEach(function (egg) {
      egg.addEventListener('click', function () {
        var id = egg.dataset.eggId;
        if (eggIds.indexOf(id) === -1) {
          return;
        }

        setSessionValue(id, 'true');

        if (eggIds.every(function (eggId) { return getSessionValue(eggId) === 'true'; })) {
          setSessionValue('easterFound', 'true');
          revealEasterNav();

          try {
            new Audio('https://cdn.discordapp.com/attachments/334598557145366528/1108203307433992232/chest_opening.mp3').play();
          } catch (error) {
            // Audio may be blocked by browser autoplay policy.
          }

          window.alert('Você encontrou!');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initAudio();
    initAge();
    initSlideshows();
    initEasterEgg();
  });
}());
