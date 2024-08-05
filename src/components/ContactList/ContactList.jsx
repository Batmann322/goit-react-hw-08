import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";

export default function ContactList({ id }) {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {number}
          </p>
          <button onClick={handleDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
