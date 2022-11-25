import React from "react";
import Task from "./Task";
import Header from "./Header";
import Schedule from "./Schedule";

// import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Header />
      <Task />
      <Schedule />
    </div>
  );
}

export default Home;
