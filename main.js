// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Select all like elements
const hearts = document.querySelectorAll(".like-glyph");

// Add event listeners to each heart
hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        handleHeartClick(heart);
    });
});

// Function to handle heart clicks
function handleHeartClick(heart) {
    mimicServerCall()
        .then(() => {
            if (heart.textContent === EMPTY_HEART) {
                heart.textContent = FULL_HEART; // Change to full heart
                heart.classList.add("activated-heart");
            } else {
                heart.textContent = EMPTY_HEART; // Change back to empty heart
                heart.classList.remove("activated-heart");
            }
        })
        .catch((error) => {
            showError(error);
        });
}

// Function to show error modal
function showError(errorMessage) {
    const errorModal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    modalMessage.textContent = errorMessage; // Set error message
    errorModal.classList.remove("hidden"); // Show modal

    setTimeout(() => {
        errorModal.classList.add("hidden"); // Hide after 3 seconds
    }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
