/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  const hour = parseInt(time, 10);
  if (hour < 12){return 'Good Morning'}
  if (hour > 12 && hour < 17){return 'Good Afternoon'}
  if (hour > 17){return 'Good Evening'}

}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}