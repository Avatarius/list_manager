import { Button } from "../button/button";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <h1>List Manager</h1>
    </header>
  );
}

export { Header };
