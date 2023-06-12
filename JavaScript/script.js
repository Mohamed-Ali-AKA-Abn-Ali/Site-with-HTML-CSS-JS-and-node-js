// Define global variables
var slideIndex = 1;
var timer;

// Function to show slides
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Increment slide index and set timeout for next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  timer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Function to advance to the next slide
function plusSlides(n) {
  clearTimeout(timer); // Stop automatic slideshow
  slideIndex += n;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Reset slide index if it goes out of bounds
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Set timeout for next slide
  timer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Function to set the current slide
function currentSlide(n) {
  clearTimeout(timer); // Stop automatic slideshow
  slideIndex = n;
  showSlides();
}

// Start automatic slideshow
showSlides();
