/*
majority of this code came from https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript
*/

const signUpForm = document.getElementById("form__sign-up");
const signUp = document.getElementById("sign-up");
const success = document.getElementById("success");
const dismissBtn = document.getElementById("button_type_dismiss");
// const re = /([a-z0-9\-_\.]{3,})(@{1}\w{3,})(.{1}[a-z]{3})/gi; // regex for email validation
const email = document.getElementById("email"); // email input field
const emailError = document.querySelector(".form__error"); // error message

// // when user types into email input
// email.addEventListener("input", event => {
// 	if (email.validity.valid) {
// 		// cases where error message is visible but field is valid: remove error message
// 		emailError.textContent = ""; // reset error message content
// 		emailError.className = "form__error"; // reset error message class
// 	} else {
// 		// if still an error: show it
// 		showError();
// 	}
// });

// when user submits form
signUpForm.addEventListener("submit", event => {
	const userEmail = document.getElementById("user-email");
	if (!email.validity.valid) {
		// if email is invalid
		event.preventDefault(); // prevent submission
		showError(); // show error message
	} else if (email.validity.valid) {
		// if email is valid
		event.preventDefault();
		signUp.style.display = "none"; // hide sign-up section
		success.style.display = "flex"; // show success section
		userEmail.textContent = event.target[0].value; // include user's email in registration success message
		signUpForm.reset(); // reset form fields
	}
});

function showError() {
	// const emailError = document.querySelector(".form__error"); // error message

	if (email.validity.valueMissing) {
		// If the field is empty,
		// display the following error message.
		emailError.textContent = "Please type your email address below";
	} else if (email.validity.typeMismatch) {
		// If the field doesn't contain an email address,
		// display the following error message.
		emailError.textContent = "Nope. Needs to be a valid email address";
	} else if (email.validity.tooShort) {
		// If the data is too short,
		// display the following error message.
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}
	// Set the styling appropriately
	emailError.className = "form__error active";
}

// when user clicks dismiss button after successful sign-up
function dismiss() {
	success.style.display = "none"; // hide success section
	signUp.style.display = "flex"; // show sign-up section
	emailError.textContent = ""; // reset error message content
	emailError.className = "form__error"; // reset error message class
}
dismissBtn.addEventListener("click", dismiss);
