let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startAutoSlide();
playMusicOnLoad();

// Function to Show Slides
function showSlides(n) {
  const slides = document.querySelectorAll('.slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex - 1].style.display = 'block';
}

// Manual Navigation using Buttons
function changeSlide(n) {
  showSlides(slideIndex += n);
  restartAutoSlide();
}

// Auto Slide Function
function startAutoSlide() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 10000);
}

// Restart Auto Slide After Manual Navigation
function restartAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Ensure Music Autoplays on Page Load
function playMusicOnLoad() {
  const audio = document.getElementById('background-music');
  
  // Try to Play Music
  audio.play().then(() => {
    console.log('Music started successfully.');
  }).catch(error => {
    console.warn('Autoplay blocked. Waiting for user interaction.');

    // Start music on first user interaction
    const startMusic = () => {
      audio.play();
      console.log('Music started on interaction.');
      document.removeEventListener('click', startMusic);
      document.removeEventListener('keydown', startMusic);
    };

    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
  });
}
