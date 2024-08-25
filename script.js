document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('start-game');
    const continueJourneyButton = document.getElementById('continue-journey');
    const videoContainer = document.getElementById('video-container');
    const videoFrame = document.getElementById('video-frame');
    const fpsCounter = document.getElementById('fps-counter');
    const backgroundMusic = document.getElementById('background-music');
    const clickSound = document.getElementById('click-sound');

    // Function to play the click sound effect
    function playClickSound() {
        clickSound.currentTime = 0; // Rewind to the beginning
        clickSound.play();
    }

    startGameButton.addEventListener('click', () => {
        playClickSound(); // Play click sound

        // Hide video container initially
        videoContainer.style.display = 'none';

        // After 3 seconds, show the video container and play the video
        setTimeout(() => {
            videoContainer.style.display = 'flex';
            videoFrame.src = "https://www.youtube.com/embed/WokQQ-cfFqw?autoplay=1"; // Load and autoplay video
        }, 1500); // 1500 milliseconds = 1.5 seconds
    });

    function updateFPS() {
        // Generate a random FPS value between 80 and 200
        const fps = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
        fpsCounter.textContent = `FPS: ${fps}`;
    }

    // Update FPS every 100 milliseconds
    setInterval(updateFPS, 100);

    continueJourneyButton.addEventListener('click', () => {
        playClickSound(); // Play click sound
        // Add actions for the continue journey button here
    });

});
