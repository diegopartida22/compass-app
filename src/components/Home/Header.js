import React from "react";
// import Hour from "../Date/Hour";
import Day from "../Elements/Day";
import styles from "./Header.module.css";
import Hour from "../Elements/Hour";
import Weather from "../Elements/Weather";

// create a header component

function Header() {
  const logoutHandler = () => {
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <div>
        <div>
          <div className={styles.box1}>
            <h1>Weekly Planner</h1>
            <h2>Use this planner to organize your daily issues</h2>
          </div>
        </div>
        <div className={styles.box2}>
          <div>
            <h3 className={styles.hour}>
              <Hour />
            </h3>
          </div>
          <div className={styles.date}>
            <Day />
          </div>
          {/* <div>
            <Weather />
          </div> */}
        </div>
        <div className={styles.logout}>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
