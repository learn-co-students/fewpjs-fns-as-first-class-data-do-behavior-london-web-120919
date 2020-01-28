/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeint = time.split(':')
  let hour = timeint[0]
  hour = parseInt(time, 10);
if (hour < 12) return "Good Morning"
if (hour < 17) return "Good Afternoon"
return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(text) {
  document.getElementById("greeting").innerText = text;
}
