/* Given Code, don't edit */

function handleClick(e) {
	const timeString = document.getElementById('time').value;
	displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
	time = parseInt(time.split(':')[0]);

	if (time < 12) {
		return 'Good Morning';
	} else if (time < 17 && time >= 12) {
		return 'Good Afternoon';
	} else if (time >= 17) {
		return 'Good Evening';
	}
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
	document.querySelector('#greeting').innerText = greeting;
}
