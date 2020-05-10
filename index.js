
function handleClick(e) {
	const timeString = document.getElementById('time').value;
	displayMessage(greet(timeString));
}

function greet(timeInput) {
  let timeNum = parseInt(timeInput.split(':')[0])
  if (timeNum < 12) {
    return "Good Morning"
  }
  if (timeNum >17) {
    return "Good Evening"
  }
  return "Good Afternoon"
}

function displayMessage(inputMsg){
  document.getElementById('greeting').innerText = inputMsg
}