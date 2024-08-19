import logo from "../assets/logoipsum.svg";
import ButtonTemplate from "./ButtonTemplate";
import styles from "../Styles/TopBar.style.module.scss";
const TopBar = () => {
  type Link = {
    href: string;
    name: string;
  };

  const links: Link[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/",
      name: "Services",
    },
    {
      href: "/",
      name: "About Us",
    },
  ];
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.logoWithLinks}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <a className={styles.topBarLink} key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <ButtonTemplate buttonText={"Login/Sign Up"} />
    </div>
  );
};

export default TopBar;
