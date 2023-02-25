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
  /*setTimeout(function() {
    carousel.classList.remove('animate');
  }, 15000);*/
}, 0);


// Value animation
const c1 = document.getElementsByClassName("c-1");
const c2 = document.getElementsByClassName("c-2");
const c3 = document.getElementsByClassName("c-3");

document.getElementById("value-btn-1").classList.add('selected-value');
document.getElementById("c1").classList.add('selected-carousel');

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