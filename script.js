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

// Value animation
const c1 = document.getElementsByClassName("c-1");
const c2 = document.getElementsByClassName("c-2");
const c3 = document.getElementsByClassName("c-3");

document.getElementById("value-btn-1").classList.add('selected-value');
document.getElementById("c1").classList.add('selected-carousel');
document.getElementById("c1").classList.add('animate1');

t1.to(".animate1", {
    x: "-33vw",
    scrollTrigger: {
      trigger: ".value__carousel",
      start: "20% 60%",
      end: "20% 20%",
      scrub: 1,
    },
});

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
};


// Swiper settings
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});