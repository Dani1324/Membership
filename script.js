const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

// Smooth scrolling to all .smooth links
$("a.smooth").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// Carousel loop animation
var carousel = document.querySelector('.carousel-inner');

setInterval(function() {
  carousel.classList.add('animate');
}, 0);


// Image slider gsap animation
const t1 = gsap.timeline();
const t2 = gsap.timeline();

// Value animation
const c1 = document.getElementsByClassName("c-1");
const c2 = document.getElementsByClassName("c-2");
const c3 = document.getElementsByClassName("c-3");

document.getElementById("value-btn-1").classList.add('selected-value');
document.getElementById("c1").classList.add('selected-carousel');
document.getElementById("c1").classList.add('animate1');


if (width < 1025) {
  t1.to(".animate1", {
    x: "-184vw",
    scrollTrigger: {
      trigger: ".value__carousel",
      start: "20% 60%",
      end: "20% 20%",
      scrub: 1,
    },
  });
}
else{
  t1.to(".animate1", {
    x: "-33vw",
    scrollTrigger: {
      trigger: ".value__carousel",
      start: "20% 60%",
      end: "20% 20%",
      scrub: 1,
    },
  });
}


function value1(n) {
  // Button
  document.getElementById("value-btn-1").classList.remove('selected-value');
  document.getElementById("value-btn-2").classList.remove('selected-value');
  document.getElementById("value-btn-3").classList.remove('selected-value');
  document.getElementById("value-btn-4").classList.remove('selected-value');
  document.getElementById(`value-btn-${n}`).classList.add('selected-value');

  // Carousel
  document.getElementById("c1").classList.remove('selected-carousel');
  document.getElementById("c2").classList.remove('selected-carousel');
  document.getElementById("c3").classList.remove('selected-carousel');
  document.getElementById("c4").classList.remove('selected-carousel');
  document.getElementById(`c${n}`).classList.add('selected-carousel');

  // Image carousel
  document.getElementById("c1").classList.remove('animate1');
  document.getElementById("c2").classList.remove('animate2');
  document.getElementById("c3").classList.remove('animate3');
  document.getElementById("c4").classList.remove('animate4');
  document.getElementById(`c${n}`).classList.add(`animate${n}`);

  t1.to(".animate1", {
    x: "0vw",
    duration: 0,
  });

  t1.to(".animate2", {
    x: "0vw",
    duration: 0,
  });

  t1.to(".animate3", {
    x: "0vw",
    duration: 0,
  });

  if (width < 1025) {
    t1.to(".animate1", {
      x: "-184vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 2,
      },
    });

    t1.to(".animate2", {
      x: "-276vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 3,
      },
    });

    t1.to(".animate3", {
      x: "-92vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 2,
      },
    });

    t1.to(".animate4", {
      x: "-184vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 2,
      },
    });
  }
  else{
    t1.to(".animate1", {
      x: "-33vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });

    t1.to(".animate2", {
      x: "-70.5vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 2,
      },
    });

    t1.to(".animate3", {
      x: "2.5vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });

    t1.to(".animate4", {
      x: "-33vw",
      scrollTrigger: {
        trigger: ".value__carousel",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });
  }
};


// Swiper settings
if (width < 1025) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: (width/8.5),
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
else{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1.67",
    centeredSlides: true,
    spaceBetween: 200,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}




// Mobile menu
document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu");
  var header = document.querySelector('.header');
  var body = document.querySelector('body');

  hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("hamburger--open");
    menu.classList.toggle("menu--open");
    header.classList.toggle("menu--header");
    body.classList.toggle("body--fixed");

    gsap.set(".menu-links a", { opacity: 0,});
    gsap.to(".menu-links a", {
      delay: 0.2,
      duration: 0.5, 
      opacity: 1,
    });

  });
});


// Lazy loading
function lazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const imageCount = images.length;
  let loadedCount = 0;

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0 && loadedCount < imageCount) {
        const image = entry.target;
        image.src = image.dataset.src;
        observer.unobserve(image);
        loadedCount++;
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection, options);

  // Separare le immagini presenti nella schermata dall'utente dalle altre
  const visibleImages = [];
  const hiddenImages = [];
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if ((rect.top >= 0 && rect.top <= window.innerHeight) || (rect.bottom >= 0 && rect.bottom <= window.innerHeight)) {
      visibleImages.push(image);
    } else {
      hiddenImages.push(image);
    }
  });

  // Caricare prima le immagini presenti nella schermata e poi le altre
  visibleImages.forEach(image => {
    image.src = image.dataset.src;
    loadedCount++;
  });

  hiddenImages.forEach(image => {
    observer.observe(image);
  });
}

window.addEventListener('DOMContentLoaded', lazyLoad);
