
var currentSlide = 0;

function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content_between_sidebar_and_topnav');
    contentSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the clicked content section
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    
    // Reset the slide index when changing content
    currentSlide = 0;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3; // Adjust the modulus for the number of slides
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3; // Adjust the modulus for the number of slides
    updateSlider();
}

function updateSlider() {
    var slider = document.querySelector('.slider');
    var slideWidth = slider.clientWidth;
    var newTransformValue = -currentSlide * slideWidth + 'px';
    slider.style.transform = 'translateX(' + newTransformValue + ')';
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
});
