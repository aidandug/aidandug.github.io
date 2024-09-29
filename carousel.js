// Select all audio elements
const audioElements = document.querySelectorAll('audio');

audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
        // Pause all other audio when one is played
        audioElements.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0; // Reset other audio
            }
        });
    });
});
