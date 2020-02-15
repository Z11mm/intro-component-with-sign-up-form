const form = document.querySelector("#form");

const setError = (input, message) => {
  const formField = input.parentElement;
  const errorTextContainer = document.querySelector("small");

  // add error message inside small tag
  errorTextContainer.textContent = message;
  // add error class
  formField.classList.add("error");
};

const setSuccess = input => {
  const formField = input.parentElement;

  formField.classList.add("success");
};

const isValidEmail = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const validateInputs = () => {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // get input values and remove whitespace
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === "") {
    // show error and add error class
    setError(firstname, "First Name cannot be blank");
  } else {
    // add success class
    setSuccess(firstname);
  }

  if (lastnameValue === '') {
    setError(lastname, 'Last Name cannot be blank');
  } else {
    setSuccess(lastname);
  }

  if (emailValue === "") {
    setError(email, "Looks like this is not an email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Last Name cannot be blank");
  } else {
    setSuccess(password);
  }
};

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});
