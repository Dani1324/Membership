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


// Header-popup
const link = document.querySelector('#header-popup');
const popup = document.querySelector('.header-popup');

link.addEventListener('click', function() {
  popup.style.display = 'block';
  setTimeout(function() {
    popup.style.opacity = 1;
  }, 100);
});

popup.addEventListener('mouseleave', function() {
  popup.style.opacity = 0;
  setTimeout(function() {
    popup.style.display = 'none';
  }, 500);
});


// GSAP - settings
gsap.registerPlugin(ScrollTrigger);
const myText = new SplitType('.line');
const imageSliderPin = gsap.timeline();
const andvantagesSliderPin = gsap.timeline();
const zoom = gsap.timeline();


// GSAP - text animation
gsap. to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: .6,
});

// GSAP - image slider - pin
imageSliderPin. to(".image-slider", {
  duration: 3,
  scrollTrigger: {
    trigger: ".image-slider",
    start: "95% 90%",
    end: "90% 0%",
    pin: true,
    toggleActions: "repeat none none none",
    markers: false,
  },
})

imageSliderPin.eventCallback("onComplete", function() {

  // GSAP - image-slider - animation
  const t1 = gsap.timeline({
    ease: Power4.easeOut,
    scrollTrigger: {
      trigger: ".image-1, image-2, image-3",
      start: "90% 95%",
      end: "90% 0%",
      scrub: 4,
      toggleActions: "repeat none none none",
      markers: false,
    },
  });

  t1.to(".image-1", {
    delay: 0.3,
    y: "-0.5vw",
    opacity: 0,
    scale: 1.05,
  });

  t1.to(".image-2", {
    y: "-0.5vw",
    opacity: 0,
    scale: 1.05,
  });

});


// GSAP - advantages slider - pin
andvantagesSliderPin. to(".advantages", {
  scrollTrigger: {
    trigger: ".advantages",
    start: "95% 85%",
    end: "100% -0%",
    pin: true,
    toggleActions: "repeat none none none",
    markers: false,
  },
})

andvantagesSliderPin.eventCallback("onComplete", function() {

  // GSAP - advantages-slider - animation
  const t2 = gsap.timeline({
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: ".horizontal-slider, #changing-text h2",
      start: "95% 35%",
      end: "90% -50%",
      scrub: 3,
      toggleActions: "repeat none none none",
      markers: false,
    },
  });

  const t3 = gsap.timeline({
    ease: Power1.easeInOut,
    scrollTrigger: {
      trigger: ".horizontal-slider, #changing-text h2",
      start: "95% 35%",
      end: "90% -50%",
      scrub: 3,
      toggleActions: "repeat none none none",
      markers: false,
    },
  });

  t2.to(".horizontal-slider", {
    duration: 30,
    x: "-128.8vw",
  });

  t3.to("#changing-text h2", {
    duration: 30,
    y: "-4.32vw",
  });

  t2.to(".horizontal-slider", {
    duration: 60,
    x: "-299.1vw",
  });

  t3.to("#changing-text h2", {
    duration: 60,
    y: "-8.6vw",
  });

  t2.to(".horizontal-slider", {
    duration: 30,
    x: "-384.6vw",
  });

  t3.to("#changing-text h2", {
    duration: 30,
    y: "-12.95vw",
  });

  t2.to(".horizontal-slider", {
    duration: 30,
    x: "-427.5vw",
  });

  t3.to("#changing-text h2", {
    duration: 30,
    y: "-17.3vw",
  });

  t2.to(".horizontal-slider", {
    duration: 30,
    x: "-470vw",
  });

  t3.to("#changing-text h2", {
    duration: 30,
    y: "-21.6vw",
  });

});


// GSAP - zoom - pin
zoom. to(".experience", {
  scrollTrigger: {
    trigger: ".experience",
    start: "100% 100%",
    end: "100% 0%",
    pin: true,
    toggleActions: "repeat none none none",
    markers: false,
  },
})

zoom.eventCallback("onComplete", function() {

  // GSAP - zoom - animation
  const zoom = gsap.timeline({
    ease: Power3.easeInOut,
    scrollTrigger: {
      trigger: ".experience h2",
      start: "50% 80%",
      end: "100% 20%",
      scrub: 3,
      toggleActions: "repeat none none none",
      markers: false,
    },
  });

  zoom.from(".experience h2", {
    scale: 0.5,
    y: "8vw",
  });

});