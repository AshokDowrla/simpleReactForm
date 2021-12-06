import { useState } from "react";

import styles from "./DropdownInput.module.scss";
import commonStyles from "../FormInput.module.scss";

const DropdownInput = (props) => {
  const [dropdown, setDropdown] = useState(false);



  const handleOptionsDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  
  const onDropDownSelect = (inputName, option) => {
    setDropdown((prevDropdown) => !prevDropdown);
    props.inputChangeHandler(inputName, option);
  };

  const dropdownActive = dropdown ? "active" : "";
  return (
    <div className={commonStyles["formSelect--container"]}>
      <div
        className={`${styles["formSelect--inputBox"]} ${styles[dropdownActive]}`}
        onClick={handleOptionsDropdown}
      >
        <div className={commonStyles['formSelect--input']}>
          {props.inputPlaceHolder}
        </div>
        <div className={styles["formSelect--arrow"]}>
          <span className="horizontal"></span>
        </div>
      </div>
      <div className={`${styles['formSelect--options']} ${styles[dropdownActive]}`}>
        {props.inputOptions.map((option, index) => (
          <div
            name={props.inputName}
            key={index}
            className={styles["formSelect--option"]}
            data-value={option}
            onClick={() => {
              onDropDownSelect(props.inputName, option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownInput;
