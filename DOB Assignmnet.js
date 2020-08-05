/*
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
var password = document.getElementById("password"), confirmPassword = document.getElementById("confirmPassword");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;



/*
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
document.getElementById('submit')
	.addEventListener('click', function() {
		alert('Congratulation your registration is done successfully!');
	});
