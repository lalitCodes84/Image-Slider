let currentSlide = 0;
let isAutoPlay = true;
let slideInterval;

function showSlide(index) {
  const slides = document.getElementsByClassName('slider-img');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % document.getElementsByClassName('slider-img').length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + document.getElementsByClassName('slider-img').length) % document.getElementsByClassName('slider-img').length;
  showSlide(currentSlide);
}


function toggleSlider() {
  if (isAutoPlay) {
    clearInterval(slideInterval);
  } else {
    slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
  }
  isAutoPlay = !isAutoPlay;
}



showSlide(currentSlide);
slideInterval = setInterval(nextSlide, 4000); // Start auto-play