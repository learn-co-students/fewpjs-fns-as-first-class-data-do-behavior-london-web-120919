/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeNum = parseInt(time.split(':')[0]);
  if (timeNum < 12) {
    greeting = "Good Morning";
  } else if (timeNum < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting
}

/* Write your implementation of displayMessage() */
function displayMessage(outputTime) {
  document.getElementById('greeting').innerText = outputTime;
}
