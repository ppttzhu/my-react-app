import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <ul className={styles.users}>
      {props.users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        );
      })}
    </ul>
  );
}

export default UsersList;
