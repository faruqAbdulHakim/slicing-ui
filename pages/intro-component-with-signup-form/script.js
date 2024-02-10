document.addEventListener('DOMContentLoaded', () => {
  const firstNameInput = document.querySelector('input[name="first-name"]');
  const lastNameInput = document.querySelector('input[name="last-name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const submitBtn = document.querySelector('.submit-btn')

  firstNameInput.value = 'Jonathan ';
  firstNameInput.focus();

  firstNameInput.addEventListener('blur', () =>validateFirstName(firstNameInput));
  lastNameInput.addEventListener('blur', () => validateLastName(lastNameInput));
  emailInput.addEventListener('blur', () => validateEmail(emailInput));
  passwordInput.addEventListener('blur', () => validatePassword(passwordInput));

  firstNameInput.addEventListener('focus', () => clearError(firstNameInput));
  lastNameInput.addEventListener('focus', () => clearError(lastNameInput));
  emailInput.addEventListener('focus', () => clearError(emailInput));
  passwordInput.addEventListener('focus', () => clearError(passwordInput));

  submitBtn.addEventListener('click', () => {
    validateFirstName(firstNameInput);
    validateLastName(lastNameInput);
    validateEmail(emailInput);
    validatePassword(passwordInput);
  })
});

/**
 *
 * @param {HTMLInputElement} inputEl
 */
function clearError(inputEl) {
  inputEl.parentElement.classList.remove('error');
}

/**
 *
 * @param {HTMLInputElement} inputEl
 */
function validateFirstName(inputEl) {
  const value = inputEl.value;
  if (value.trim().length === 0) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'This field is required';
  }
}

/**
 *
 * @param {HTMLInputElement} inputEl
 */
function validateLastName(inputEl) {
  const value = inputEl.value;
  if (value.trim().length === 0) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'This field is required';
  }
}

/**
 *
 * @param {HTMLInputElement} inputEl
 */
function validateEmail(inputEl) {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const value = inputEl.value;

  if (value.trim().length === 0) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'This field is required';
  } else if (!emailRegex.test(value)) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'Invalid email address';
  }
}

/**
 *
 * @param {HTMLInputElement} inputEl
 */
function validatePassword(inputEl) {
  const value = inputEl.value;

  if (value.trim().length === 0) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'This field is required';
  } else if (/s/.test(value.trim())) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'Can\'t contains whitespace';
  } else if (value.trim().length < 8) {
    inputEl.parentElement.classList.add('error');
    inputEl.parentElement.querySelector('.text-error').innerHTML =
      'Minimum 8 characters';
  }
}
