const images = document.querySelectorAll('.carousel img');
const progressBars = document.querySelectorAll('.progress-bar');
let currentIndex = 0;
const intervalTime = 3000; // 3 seconds

// Function to show the next image
function showNextImage() {
    images[currentIndex].classList.remove('active');
    progressBars[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    progressBars[currentIndex].classList.add('active');
}

// Set interval for automatic image change
let autoSlide = setInterval(showNextImage, intervalTime);

// Update image and reset interval on button click
document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlide);
    showNextImage();
    autoSlide = setInterval(showNextImage, intervalTime);
});

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    images[currentIndex].classList.remove('active');
    progressBars[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
    progressBars[currentIndex].classList.add('active');
    autoSlide = setInterval(showNextImage, intervalTime);
});