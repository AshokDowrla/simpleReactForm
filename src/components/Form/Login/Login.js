import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import FormInput from "../FormInput/FormInput";
import visibleEye from "../../../images/visible-eye.png";
import useInput from "../../../hooks/use-input";
import validateValue from "../../../validateValue";
import styles from "../Form.module.scss";

const Login = () => {
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

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  console.log('Login')

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword();
  };

  return (
    <div className={styles["form--container"]}>
      <h1 className={styles["form--title"]}>Let’s login into your account</h1>
      <h4 className={styles["form--signIn__text"]}>
        Create a new account?{" "}
        <span>
          <Link to="/signUp">Sign Up</Link>
        </span>
      </h4>
      <form className={styles.basicForm} onSubmit={submitHandler}>
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

export default Login;
