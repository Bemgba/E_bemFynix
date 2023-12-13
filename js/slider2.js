var currentSlide = 0;

function showSlides() {
    var slides = document.querySelectorAll('.slider img');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    currentSlide++;
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }

    slides[currentSlide - 1].style.display = 'block';
}

function prevSlide() {
    currentSlide--;
    showSlides();
}

function nextSlide() {
    currentSlide++;
    showSlides();
}

// Auto slide every 3 seconds
setInterval(showSlides, 3000);