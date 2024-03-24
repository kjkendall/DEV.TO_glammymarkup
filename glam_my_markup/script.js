// Set the date and time of the camp activities
var campStartDate = new Date("2024-06-01T09:00:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining until the camp activities start
    var timeRemaining = campStartDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown").innerHTML = "Camp activities start in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Camp activities have started!";
    }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    // Form submission handler
    document.getElementById("survey-form").addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Perform any necessary form validation here

        // Show the popup
        showPopup();
    });

    // Function to show the popup
    function showPopup() {
        // Display the popup
        document.getElementById("popup").style.display = "block";

        // Close the popup when the close button is clicked
        document.querySelector(".close").addEventListener("click", function() {
            document.getElementById("popup").style.display = "none";
        });
    }
});

