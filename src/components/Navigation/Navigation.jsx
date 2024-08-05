import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={styles.link}>
        Contacts
      </NavLink>
    </nav>
  );
}
