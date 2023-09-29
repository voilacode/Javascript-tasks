document.addEventListener('DOMContentLoaded', function () {
    const imageList = document.getElementById('image-list');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const intervalDuration = 2000; 
    function showImage(index) {
        const imageWidth = images[0].clientWidth;
        imageList.style.transform = `translateX(${-index * imageWidth}px)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
        clearInterval(slideshowInterval); 
        showNext();
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(slideshowInterval); 
        showPrev();
    });

    
    const slideshowInterval = setInterval(showNext, intervalDuration);
});