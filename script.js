// Redirect after loading animation completes
setTimeout(function() {
    // Replace with your actual website URL when ready
    window.location.href = "https://example.com"; // CHANGE THIS
}, 3000);

// Update progress bar
const progress = document.querySelector('.progress');
let width = 0;
const interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval);
    } else {
        width += 10;
        progress.style.width = width + '%';
    }
}, 300);
