// Password Check Function
function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const errorMessage = document.getElementById('error');

  // Check if the password is either 'rara' or 'muthahharah'
  if (passwordInput === 'rara' || passwordInput === 'muthahharah') {
    window.location.href = 'confirmation.html'; // Redirect to confirmation.html if correct
  } else {
    errorMessage.style.display = 'block'; // Show error message if wrong
  }
}

// Function to handle the "No" button click (if needed elsewhere in the script)
function confirmNo() {
  const noButton = document.getElementById('noButton');
  if (noButton) {
    // Ensure noButton exists
    const currentSize = window.getComputedStyle(noButton).fontSize; // Get current font size
    const newSize = parseFloat(currentSize) * 0.8; // Reduce size by 20%
    noButton.style.fontSize = `${newSize}px`; // Apply the new size
  }
}
