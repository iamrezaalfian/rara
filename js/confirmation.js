// Variable to keep track of the number of clicks
let noButtonClickCount = 0;

// Function to handle the "Yes" button click
function confirmYes() {
  alert('Selamat, Ini Spesial gift untuk pacarku yang lagi badmood 💞😘💞');
  window.location.href = 'flower.html'; // Redirect to flower.html
}

// Function to handle the "No" button click
function confirmNo() {
  const noButton = document.getElementById('noButton');

  if (noButton) {
    noButtonClickCount++; // Increment click count

    if (noButtonClickCount > 5) {
      noButton.style.display = 'none'; // Hide the button after 5 clicks
    } else {
      const currentSize = window.getComputedStyle(noButton).fontSize; // Get current font size
      const newSize = parseFloat(currentSize) * 0.8; // Reduce size by 20%
      noButton.style.fontSize = `${newSize}px`; // Apply the new size
    }
  }
}
