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
const imageSlider = gsap.timeline();
const textReveal = gsap.timeline();
const introduction = gsap.timeline();


// GSAP - text animation
gsap. to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: .6,
});

// GSAP - Image slider
imageSlider. to(".image-slider", {
  duration: 3,
  scrollTrigger: {
    trigger: ".image-slider",
    start: "95% 90%",
    end: "90% 0%",
    pin: true,
    toggleActions: "repeat none none none",
  },
});

imageSlider.eventCallback("onComplete", function() {

  const t1 = gsap.timeline({
    ease: Power4.easeOut,
    scrollTrigger: {
      trigger: ".image-1",
      start: "90% 95%",
      end: "90% 0%",
      scrub: 4,
      toggleActions: "repeat none none none",
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


 // GSAP - Text reveal
textReveal. to(".text-reveal", {
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "100% 60%",
    end: "100% 10%",
    pin: true,
    toggleActions: "repeat none none none",
  },
});

textReveal.eventCallback("onComplete", function() {

  const t3 = gsap.timeline({
    ease: Sine.easeIn,
    scrollTrigger: {
      trigger: ".text-reveal, text-reveal h2",
      start: "100% 65%",
      end: "100% 10%",
      scrub: 0.5,
    },
  });

  t3.from(".text-reveal h2, .text-reveal h3", {
    delay: 0.8,
    duration: 1.6,
    opacity: 0,
    scale: 0.75,
    y: "4vw",
  });

});


 // GSAP - Cards
introduction. to("#card-1", {
  scrollTrigger: {
    trigger: "#card-1",
    start: "100% 82%",
    end: "100% 20%",
    pin: true,
    toggleActions: "repeat none none none",
  },
});

introduction. to("#card-2", {
  scrollTrigger: {
    trigger: "#card-2",
    start: "100% 82%",
    end: "100% 20%",
    pin: true,
    toggleActions: "repeat none none none",
  },
});

introduction. to("#card-3", {
  scrollTrigger: {
    trigger: "#card-3",
    start: "100% 82%",
    end: "100% 20%",
    pin: true,
    toggleActions: "repeat none none none",
  },
});

introduction. to("#card-4", {
  scrollTrigger: {
    trigger: "#card-4",
    start: "100% 82%",
    end: "100% 20%",
    pin: true,
    toggleActions: "repeat none none none",
  },
});


introduction.eventCallback("onComplete", function() {

  const t4 = gsap.timeline({
    ease: Sine.easeInOut,
    scrollTrigger: {
      trigger: "#card-1",
      start: "100% 82%",
      end: "100% 20%",
      scrub: 4,
    },
  });

  const t5 = gsap.timeline({
    ease: Sine.easeInOut,
    scrollTrigger: {
      trigger: "#card-2",
      start: "100% 82%",
      end: "100% ",
      scrub: 4,
    },
  });

  const t6 = gsap.timeline({
    ease: Sine.easeInOut,
    scrollTrigger: {
      trigger: "#card-3",
      start: "100% 82%",
      end: "100% 20%",
      scrub: 4,
    },
  });

  const t7 = gsap.timeline({
    ease: Sine.easeInOut,
    scrollTrigger: {
      trigger: "#card-4",
      start: "100% 82%",
      end: "100% 20%",
      scrub: 4,
      markers: false,
    },
  });

  t4.to("#card-1 .introduction-content .block", {
    x: "-100vw",
  });

  t4.to("#card-1 .introduction-content .block", {
    delay: 0.05,
    x: "-200vw",
  });

  t5.to("#card-2 .introduction-content .block", {
    x: "-100vw",
  });

  t5.to("#card-2 .introduction-content .block", {
    delay: 0.05,
    x: "-200vw",
  });

  t5.to("#card-2 .introduction-content .block", {
    delay: 0.05,
    x: "-300vw",
  });

  t6.to("#card-3 .introduction-content .block", {
    x: "-100vw",
  });

  t7.to("#card-4 .introduction-content .block", {
    x: "-100vw",
  });

  t7.to("#card-4 .introduction-content .block", {
    delay: 0.05,
    x: "-200vw",
  });

});