document.addEventListener("DOMContentLoaded", function () {
    let countdownInterval;
    let countdownDate;
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerHTML = days + "d ";
      document.getElementById("hours").innerHTML = hours + "h ";
      document.getElementById("minutes").innerHTML = minutes + "m ";
      document.getElementById("seconds").innerHTML = seconds + "s ";
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("stopButton").disabled = true;
      }
    }
  
    document.getElementById("startButton").addEventListener("click", function () {
      // Set the date and time 10 minutes from now
      countdownDate = new Date(new Date().getTime() + 1 * 60 * 1000).getTime();
  
      // Update the countdown every second
      countdownInterval = setInterval(updateCountdown, 1000);
  
      // Disable the start button once the countdown starts
      document.getElementById("startButton").disabled = true;
      // Enable the stop button when the countdown starts
      document.getElementById("stopButton").disabled = false;
    });
  
    document.getElementById("stopButton").addEventListener("click", function () {
      // Stop the countdown
      clearInterval(countdownInterval);
  
      // Enable the start button and disable the stop button
      document.getElementById("startButton").disabled = false;
      document.getElementById("stopButton").disabled = true;
  
      // Reset the countdown display
      document.getElementById("countdown").innerHTML = '<span id="days">0d </span><span id="hours">0h </span><span id="minutes">0m </span><span id="seconds">10s </span>';
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    let countdownInterval;
    let countdownDate;
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      days.innerHTML = days + "d ";
      hours.innerHTML = hours + "h ";
      minutes.innerHTML = minutes + "m ";
      seconds.innerHTML = seconds + "s ";
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "YOOOW SUPRISE";
  
        // Redirect to YouTube video
        window.location.href = "https://www.youtube.com/watch?v=uKpxKWXGq7A";
      }
    }
  
    // Set the date and time 5 minutes from now
    countdownDate = new Date(new Date().getTime() + 1 * 60 * 1000).getTime();
  
    // Update the countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);
  });
  