import styles from "./Button.module.scss"

const Button = (props) => {
  return (
    <button
      type="submit"
      className={`${styles['form-btn']} ${styles[props.disabled]}`}
      disabled={props.disabled ? true : false}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
