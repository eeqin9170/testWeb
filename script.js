document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('start-game');
    const videoContainer = document.getElementById('video-container');
    const videoFrame = document.getElementById('video-frame');
    const fpsCounter = document.getElementById('fps-counter');

    startGameButton.addEventListener('click', () => {
        videoContainer.style.display = 'flex';
        videoFrame.src = "https://www.youtube.com/embed/WokQQ-cfFqw?autoplay=1"; // Load and autoplay video
    });

    function updateFPS() {
        // Generate a random FPS value between 80 and 200
        const fps = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
        fpsCounter.textContent = `FPS: ${fps}`;
    }

    // Update FPS every 100 milliseconds
    setInterval(updateFPS, 100);
});
