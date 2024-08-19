import styles from "../Styles/ButtonTemplateStyle.module.scss";
type ButtonTemplateProps = {
  buttonText: string;
};
const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ buttonText }) => {
  return <button className={styles.templateButton}>{buttonText}</button>;
};

export default ButtonTemplate;
