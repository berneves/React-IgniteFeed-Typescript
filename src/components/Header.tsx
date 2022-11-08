
import styles from "./Header.module.css";

import ignite_logo from "../assets/ignite_symbol.svg"

export function Header() {
    return (
      <header className={styles.header}>
        <img src={ignite_logo}></img>
         <strong>Ignite feed</strong>
       </header>
    );
  }