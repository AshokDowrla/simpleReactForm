import { useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import visibleEye from "../../../images/visible-eye.png";
import validateValue from "../../../validateValue";
import Button from "../../Button/Button";
import DropdownInput from "../FormInput/DropdownInput/DropdownInput";
import FormInput from "../FormInput/FormInput";
import styles from "../Form.module.scss";

const selectDefaultPlaceholder = "I would describe my user type as";
const SignUp = (props) => {
  const [dropdownValue, setDropdownValue] = useState(selectDefaultPlaceholder);
  const [dropdownValid, setDropdownValid] = useState(false);

  const {
    value: userNameValue,
    isValid: userNameIsValid,
    hasErrorMsg: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput(validateValue, "username");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasErrorMsg: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateValue, "email");

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasErrorMsg: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(validateValue, "password");

  const handleDropdown = (inputName, option) => {
    setDropdownValue(option);
    setDropdownValid(true);
  };

  let formIsValid = false;

  if (userNameIsValid && emailIsValid && passwordIsValid && dropdownValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(userNameValue, emailValue, passwordValue, dropdownValue);

    resetUserName();
    resetEmail();
    resetPassword();
    setDropdownValue(selectDefaultPlaceholder);
  };

  return (
    <div className={styles["form--container"]}>
      <h1 className={styles["form--title"]}>Let’s set up your account</h1>
      <h4 className={styles["form--signIn__text"]}>
        Already have an account?{" "}
        <span>
          <Link to="/login">Sign in</Link>
        </span>
      </h4>
      <form className={styles.basicForm} onSubmit={submitHandler}>
        <FormInput
          inputName="username"
          inputType="text"
          inputPlaceHolder="Username"
          inputValue={userNameValue}
          inputChangeHandler={userNameChangeHandler}
          inputBlurHandler={userNameBlurHandler}
          inputError={userNameHasError}
          inputIsValid={userNameIsValid}
        />
        <FormInput
          inputName="email"
          inputType="email"
          inputPlaceHolder="Email address"
          inputValue={emailValue}
          inputChangeHandler={emailChangeHandler}
          inputBlurHandler={emailBlurHandler}
          inputError={emailHasError}
          inputIsValid={emailIsValid}
        />

        <DropdownInput
          inputName="user_type"
          inputType="dropdown"
          inputPlaceHolder={dropdownValue}
          inputOptions={["Developer", "Admin", "Developer", "Admin"]}
          inputChangeHandler={handleDropdown}
        />

        <FormInput
          inputName="password"
          inputType="password"
          inputPlaceHolder="Password"
          inputValue={passwordValue}
          inputChangeHandler={passwordChangeHandler}
          inputBlurHandler={passwordBlurHandler}
          inputError={passwordHasError}
          inputIsValid={passwordIsValid}
          inputImg={visibleEye}
          inputSuggestion="Minimum 8 characters"
        />

        <Button btnText="Next" disabled={!formIsValid ? "disabled" : ""} />
      </form>
    </div>
  );
};

export default SignUp;
