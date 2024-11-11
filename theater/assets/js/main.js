document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = document.querySelectorAll('.section__slider-images img');
    const prevBtn = document.querySelector('.section__slider-prevBtn');
    const nextBtn = document.querySelector('.section__slider-nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        sliderImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Show the first image initially
    showImage(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
    const largeImage = document.querySelector('.section__menu-large-image img');
    const smallImages = document.querySelectorAll('.section__menu-small-images img');
    const prevBtn = document.querySelector('.section__menu button.prev');
    const nextBtn = document.querySelector('.section__menu button.next');
    let currentIndex = 0;

    function showImage(index) {
        largeImage.src = smallImages[index].src;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % smallImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + smallImages.length) % smallImages.length;
        showImage(currentIndex);
    }

    smallImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Show the first image initially
    showImage(currentIndex);
});