import React, { Fragment, useState } from "react";
import Register from "./Register";
import logoimage from "../../assets/logo.png";
import styles from "./Welcome.module.css";

function Welcome() {
  const [login, setLogin] = useState(true);
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setLogin(!login);

    if (!email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved In Local Storage");
      setLogin(!login);
    }
  };

  return (
    <Fragment>
      {login ? (
        <div className={styles.welcome}>
          <h1>Welcome, </h1>
          <p>To continue browsing safely, log in to the network.</p>

          <img src={logoimage} alt="logo" />

          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <Register />
      )}
    </Fragment>
  );
}

export default Welcome;
