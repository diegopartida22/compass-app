import React from "react";
// import Hour from "../Date/Hour";
import Day from "../Date/Day";
import styles from "./Header.module.css";

// create a header component

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.box1}>
        <h1>Weekly Planner</h1>
        <h2>Use this planner to organize your daily issues</h2>
      </div>
      <div>
        <h3 className={styles.hour}>10:48</h3>
      </div>
      <div className={styles.date}>
        <Day />
      </div>
      <div className={styles.logout}>
        <button>Logout</button>
      </div>
    </header>
  );
}

export default Header;
