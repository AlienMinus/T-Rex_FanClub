var likeCountValue = 0;
var dislikeCountValue = 0;

function likeCount() {
    // Incrementing the like count
    likeCountValue++;
    // Updating the displayed like count
    document.getElementById("like").textContent = likeCountValue;
    // Updating the total ratings
    updateTotalRatings();
}

function dislikeCount() {
    // Incrementing the dislike count
    dislikeCountValue++;
    // Updating the displayed dislike count
    document.getElementById("dislike").textContent = dislikeCountValue;
    // Updating the total ratings
    updateTotalRatings();
}

function updateTotalRatings() {
    // Updating the total ratings by adding like and dislike counts
    document.getElementById("total_ratings").textContent = likeCountValue + dislikeCountValue;
}

// Function to update the date and time every second
function updateDateTime() {
    const now = new Date();
    const dateTimeString = `It is ${now.toLocaleDateString()} and the time now is ${now.toLocaleTimeString()}.`;
    document.getElementById("currentDateTime").textContent = dateTimeString;
}

// Calling the updateDateTime function every second
setInterval(updateDateTime, 1000);