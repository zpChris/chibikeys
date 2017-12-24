// Toggles the 3-line menu icon when screen size <768px
$(document).ready(function() {
    $('.header-dropdown-icon').click(function() {
        $('.header-dropdown').toggle();
    });
});

// Controls index slideshow

var slideIndex = 1;
showSlides(slideIndex);
showSlideText(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    showSlideText(slideIndex);
}

// Function called when next/prev button is pressed, changes image
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("index-slides");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
}

// Function also called when next/prev button is pressed, changes product title
function showSlideText(n) {
    var i;
    var slideText = document.getElementsByClassName("index-slideshow-image-title");
    if (n > slideText.length) {slideIndex = 1}
    if (n < 1) {slideIndex=slideText.length}
    for (i = 0; i < slideText.length; i++) {
        slideText[i].style.display = "none";
    }
    slideText[slideIndex-1].style.display = "block";
}