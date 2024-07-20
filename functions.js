document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = 'none'; // Hide all slides
            slides[idx].classList.remove('active'); // Remove active class
        });
        slides[index].style.display = 'block'; // Show the current slide
        slides[index].classList.add('active'); // Add active class to current slide
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move to previous slide
        showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize the slider with the first slide visible
});
