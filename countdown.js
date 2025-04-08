const birthday = new Date("May 6, 2025 00:00:00").getTime();
const audio = document.getElementById("birthday-sound");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const muteButton = document.getElementById("mute-button");
const volumeSlider = document.getElementById("volume-slider");

// Play Music
playButton.addEventListener("click", function () {
    audio.play();
});

// Pause Music
pauseButton.addEventListener("click", function () {
    audio.pause();
});

// Mute / Unmute
muteButton.addEventListener("click", function () {
    audio.muted = !audio.muted;
    muteButton.textContent = audio.muted ? "Unmute" : "Mute";
});


// Countdown
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
     clearInterval(interval);
     document.getElementById("timer").innerHTML = "Happy Birthday! 🎉";
     document.getElementById("start-button").addEventListener("click", () => {
        window.location.href = "main.html";
      });
     return; // Ensure no further code runs after countdown ends
     }
 
}, 1000);

// Generate floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    document.getElementById("floating-hearts").appendChild(heart);

    const size = Math.random() * 30 + 10; // Random size between 10px to 40px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position

    setTimeout(() => {
        heart.remove();
    }, 6000); // Remove after animation
}

// Continuously generate hearts
setInterval(createHeart, 300);