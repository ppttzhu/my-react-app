import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={styles.content}>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onErrorDismissed}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
