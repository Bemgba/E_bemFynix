// Update your existing slider.js file with the following code
var currentSlide = 0;
var slides;

function initSlider() {
    slides = document.querySelectorAll('.slider img');
    showSlide(currentSlide);
}

function showSlide(index) {
    slides.forEach(function (slide) {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function autoSlide() {
    nextSlide();
}

// Initialize slider and set interval for auto slide
initSlider();
setInterval(autoSlide, 3000);
