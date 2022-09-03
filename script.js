const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const zipCodeInput = document.getElementById("zipCode");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("passwordConfirm");

emailInput.onblur = () => {
  if (emailInput.checkValidity()) {
    document.getElementById("emailError").innerText = "";
  } else {
    //use the htmlt5 validation message
    document.getElementById("emailError").innerText =
      emailInput.validationMessage;
  }
};

countryInput.onblur = () => {
  if (countryInput.checkValidity()) {
    document.getElementById("countryError").innerText = "";
  } else {
    //use user defined title in html input
    document.getElementById("countryError").innerText = countryInput.title;
  }
};

zipCodeInput.onblur = () => {
  if (zipCodeInput.checkValidity()) {
    document.getElementById("zipCodeError").innerText = "";
  } else {
    //use user defined title in html input
    document.getElementById("zipCodeError").innerText = zipCodeInput.title;
  }
};

passwordInput.onblur = () => {
  if (passwordInput.checkValidity()) {
    document.getElementById("passwordInputError").innerText = "";
  } else {
    //use user defined title in html input
    document.getElementById("passwordInputError").innerText =
      passwordInput.title;
  }
};

confirmPasswordInput.onblur = () => {
  console.log(confirmPasswordInput.value);
  if (confirmPasswordInput.value === passwordInput.value) {
    document.getElementById("confirmPasswordInputError").innerText = "";
  } else {
    document.getElementById("confirmPasswordInputError").innerText =
      "Passwords do not match";
  }
};
