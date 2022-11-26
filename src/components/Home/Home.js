import React, { useState } from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks";

import styles from "./Home.module.css";

const DUMMY_TASKS = [];

function Home(props) {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addEventHandler = (event) => {
    setTasks((prevEvents) => {
      return [event, ...prevEvents];
    });
  };

  return (
    <div className={styles.home}>
      <Header />
      <Schedule />
    </div>
  );
}

export default Home;
