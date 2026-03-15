// Set the countdown date to March 19, 2026 00:00:00
const countdownDate = new Date("March 19, 2026 00:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.querySelector(".launching-text").innerHTML = "WE HAVE ARRIVED!";
    }
}, 1000);

// Handle newsletter form submission
document.querySelector(".subscribe-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    if (email) {
        alert("Thank you for subscribing! We'll keep you updated.");
        this.reset();
    }
});
