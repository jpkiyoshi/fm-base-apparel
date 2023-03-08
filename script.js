const errorMsg = document.querySelector('.error-msg');
const input = document.querySelector('.input-email');
const errorIcon = document.querySelector('.error-icon');

function validateEmail() {
	const email = input.value;
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (regex.test(email)) {
		errorMsg.style.display = 'none';
		input.style.outline = 'none';
		errorIcon.style.display = 'none';
	} else {
		errorMsg.style.display = 'initial';
		input.style.outline = '2px red solid';
		errorIcon.style.display = 'initial';
	}
}

input.addEventListener('keyup', () => {
	errorMsg.style.display = 'none';
	input.style.outline = 'none';
	errorIcon.style.display = 'none';
});
