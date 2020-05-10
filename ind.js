/* Given Code, don't edit */

function handleClick(e) {
	const timeString = document.getElementById('time').value;
	displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
	const timeNum = parseInt(time.split(':')[0]);
	if (timeNum < 12) return 'Good Morning';
	if (timeNum > 17) return 'Good Evening';
	return 'Good Afternoon';
}
/* Write your implementation of displayMessage() */
function displayMessage(outputTime) {
	document.getElementById('greeting').innerText = outputTime;
}
