// smooth scrolling to all .smooth links
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


// GSAP - settings
gsap.registerPlugin(ScrollTrigger);
const myText = new SplitType('.line');
const imageSliderPin = gsap.timeline();


// GSAP - text animation
gsap. to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: .6,
});

// GSAP - image slider - pin
imageSliderPin. to(".image-slider", {
  delay: 0.15,
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