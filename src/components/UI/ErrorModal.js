import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

function Overlay(props) {
  return (
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
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onErrorDismissed={props.onErrorDismissed}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
