// Removed redirect so page does NOT reload or navigate away

// Update progress bar animation
const progress = document.querySelector('.progress');
let width = 0;

const interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
    // Optionally show a message or take other actions here
    // For example:
    // document.querySelector('.loading-container').innerHTML = '<p>Loading complete!</p>';
  } else {
    width += 10;
    progress.style.width = width + '%';
  }
}, 300);
