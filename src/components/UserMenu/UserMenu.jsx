import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {user.name} </span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
}
