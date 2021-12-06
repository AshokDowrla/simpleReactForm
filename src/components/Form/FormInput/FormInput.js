import { useState } from "react";

import styles from "./FormInput.module.scss";

const FormInput = (props) => {
  const [showSecret, setshowSecret] = useState(false);
  let isError = props.inputError.length > 0 ? true : false;
  const showInputType = showSecret ? "text" : props.inputType;

  return (
    <div
      className={`${styles["formInput--container"]} ${
        isError ? styles["invalid"] : ""
      }`}
    >
      <input
        id={props.inputName}
        name={props.inputName}
        type={showInputType}
        placeholder=" "
        value={props.inputValue}
        onChange={props.inputChangeHandler}
        onBlur={props.inputBlurHandler}
        className={styles["formInput--field"]}
      />

      {props.inputImg && (
        <img
          src={props.inputImg}
          alt=""
          className={styles["formInput--img"]}
          onMouseDown={() => setshowSecret(!showSecret)}
        />
      )}

      <label htmlFor={props.inputName} className={styles["formInput--label"]}>
        {props.inputPlaceHolder}
      </label>
      {isError && <div className={styles["err-msg"]}>{props.inputError}</div>}
      {!isError && !props.inputIsValid && props.inputSuggestion && (
        <div className={styles["err-msg"]}>{props.inputSuggestion}</div>
      )}
    </div>
  );
};

export default FormInput;
