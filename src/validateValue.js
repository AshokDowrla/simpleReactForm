export default function validateValue(inputField, enteredValue) {
  const capitalisedName =
    inputField.charAt(0).toUpperCase() + inputField.slice(1);
  if (!enteredValue.trim().length) {
    return capitalisedName + " can not be empty";
  }

  let errorMsg;
  if (inputField === "username") {
    if (!/^[a-zA-Z0-9]{3,15}([_ ]?[a-zA-Z0-9])*$/.test(enteredValue)) {
      errorMsg =
        capitalisedName +
        " must be aplhanumeric. can contain one underscore or space. must contain atleast 3 characters";
    } else {
      errorMsg = "";
    }
  }

  if (inputField === "email") {
    if (
      !/^([a-zA-Z0-9_\-.+]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(
        enteredValue
      )
    ) {
      errorMsg = capitalisedName + " is not valid";
    } else {
      errorMsg = "";
    }
  }

  if (inputField === "password") {
    if (
      !/^(?=.*\d)(?=(.*[\W]))(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/.test(
        enteredValue
      )
    ) {
      errorMsg =
        capitalisedName +
        " must contain atleast 1 digit, atleast 1 lowercase character, atleast 1 uppercase character, atleast 1 special character, minimum 8 characters with no spaces";
    } else {
      errorMsg = "";
    }
  }

  return errorMsg;
}
