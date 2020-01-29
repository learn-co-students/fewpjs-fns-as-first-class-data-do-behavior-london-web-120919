/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hours) {
  const splitHourMin = hours.split(":");
  const hour = splitHourMin[0]
  const integer = parseInt(hour, 10);

    if (integer < 12) {
      return "Good Morning"
    } else if (integer >= 12 && integer <= 17 ) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
}


/* Write your implementation of displayMessage() */
function displayMessage(string) {
    document.getElementById("greeting").innerText = string;
}
