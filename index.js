function startCountdown(seconds) {
  let remainingTime = seconds;
  const countdownInterval = setInterval(() => {
    if (remainingTime > 0) {
      console.log(`Time left: ${remainingTime} seconds`);
      remainingTime--;
    } else {
      console.log("Countdown Complete!");
      clearInterval(countdownInterval);
    }
  }, 1000);
  function listenForStopKey() {
    setTimeout(() => {
      document.addEventListener("keydown", (event) => {
        if (event.key === "s" || event.key === "S") {
          console.log("Countdown stopped by user!");
          clearInterval(countdownInterval);
          document.removeEventListener("keydown", arguments.callee);
        }
      });
    }, 0);
  }
  listenForStopKey();
}
if (!isNaN(seconds) && seconds > 0) {
  startCountdown(seconds);
} else {
  console.log("Please enter a valid number of seconds.");
}
