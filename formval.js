const registrationForm = document.getElementById('registration');
const username = registrationForm['username'];
console.log(username);
const errorDisplayDiv = document.getElementById('errorDisplay');
registrationForm.addEventListener('submit', validate);
// Main Validate function
function validate(e) {
    const usernameValue = checkUserName();
    if (usernameValue === false) {
        e.returnValue = false;
        return false;
    }
}
//  Validate Username
function checkUserName() {
    const twoUniqueChars = /^(?=.*(.).*\1).*$/;
    if (!twoUniqueChars.test(username.value)) {
        console.log('Provide two special characters');
        username.focus();
        return false;
    }
    return username.value;
}
/**
 * Validate Username
 */
function checkUserName() {
    // Regex: checks for two at least unique characters
    // and no special characters or whitespace
    const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;
    // test regex
    console.log(regex.test(username.value));
    if (!regex.test(username.value)) {
        console.log('gere');
        errorDisplayDiv.innerHTML = '<small>Provide two special characters</small>';
        errorDisplayDiv.style.display = 'block';
        username.focus();
        return false;
    }
    return username.value;
    // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (email = ('@example.com')) {
    alert("Email from domain example.com is not allowed");
    return false;
  }
  return true;
}