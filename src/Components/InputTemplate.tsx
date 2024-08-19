import React from "react";
import styles from "../Styles/InputTemplate.module.scss";
import { CiSearch } from "react-icons/ci";
type InputTemplateProps = {
  placeholder: string;
};

const InputTemplate: React.FC<InputTemplateProps> = ({ placeholder }) => {
  return (
    <form className={styles.inputFormContainer}>
      <input className={styles.input} type="text" placeholder={placeholder} />
      <button className={styles.buttonContainer} type="submit">
        <CiSearch className={styles.searchLogo} />
      </button>
    </form>
  );
};

export default InputTemplate;
