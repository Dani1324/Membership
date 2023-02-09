
// Add smooth scrolling to all links
$("a#ciao").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
      // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
});


// GSAP - settings
const myText = new SplitType('.line');
const sliderload = gsap.timeline({});
gsap.registerPlugin(ScrollTrigger);

// GSAP - text animation
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .6,
})

// GSAP - slider loading
sliderload. from(".fade-in", {
  y: 0, 
  delay: 0.3,
  duration: 4,
  scale: 1,
  ease: "Expo.easeOut",
})

sliderload.eventCallback("onComplete", function() {

  // GSAP - image-slider pin
  gsap. to(".image-slider", {
    delay: 0.3,
    duration: 7,
    scrollTrigger: {
      trigger: ".image-slider",
      start: "90% 80%",
      end: "90% 0%",
      pin: true,
      toggleActions: "none none none none",
    },
  })

  // GSAP - image-slider
  const t1 = gsap.timeline({
    paused: true,
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: ".image-1, image-2, image-3",
      start: "105% 80%",
      end: "80% 0%",
      scrub: 4,
      toggleActions: "none none none none",
      markers: {
        startColor: "purple",
        endColor: "fuchsia",
        fontSize: "1rem",
      },
    },
  });

  const t2 = gsap.timeline({
    paused: true,
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: ".image-1, image-2, image-3",
      start: "105% 80%",
      end: "46% 0%",
      scrub: 4,
      toggleActions: "none none none none",
      markers: {
        startColor: "purple",
        endColor: "fuchsia",
        fontSize: "1rem",
      },
    },
  });

  const t3 = gsap.timeline({
    paused: true,
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: ".image-1, image-2, image-3",
      start: "105% 80%",
      end: "46% 0%",
      scrub: 4,
      toggleActions: "none none none none",
    },
  });

  t1. to(".image-1", {
    x: '-100vw',
  });

  t1. to(".image-2", {
    x: '-100vw',
  });

  t2. to(".image-2", {
    scale: 1,
    y: '5vw',
  });

  t3. to(".image-3", {
    scale: 0.95,
    y: '2.5vw',
  });

  t3. to(".image-3", {
    scale: 1,
    y: '5vw',
  });

});


/*
  markers: {
          startColor: "purple",
          endColor: "fuchsia",
          fontSize: "1rem",
        },
*/
