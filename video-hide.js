// Initialize mute state
let isMuted = true;

// Set the initial mute state
const video = document.getElementById('top-video');
video.muted = isMuted; // Start muted

// Toggle video mute/unmute
const muteBtn = document.getElementById('mute-btn');
muteBtn.addEventListener('click', function() {
    isMuted = !isMuted; // Toggle mute state
    video.muted = isMuted; // Apply mute state
    muteBtn.textContent = isMuted ? '🔇' : '🔊'; // Update button icon
    // Show mute status message
    showMuteStatus(isMuted);
});

// Function to show mute status
function showMuteStatus(isMuted) {
    const statusMessage = document.getElementById('mute-status');
    statusMessage.textContent = isMuted ? 'Video is muted' : 'Video is unmuted';
}

// Video fade out on scroll
const videoContainer = document.querySelector('.video-container');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        videoContainer.classList.add('hidden');
        video.muted = true; // Keep video muted when it disappears
        showMuteStatus(true); // Show mute status as muted
    } else {
        videoContainer.classList.remove('hidden');
        video.muted = isMuted; // Apply current mute state
        showMuteStatus(isMuted); // Show current mute status
    }
});
