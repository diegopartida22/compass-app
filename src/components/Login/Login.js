import React, { Fragment, useState } from "react";
// import Register from "./Register";
import Home from "../Home/Home";
import logoimage from "../../assets/logo.png";
import styles from "./Login.module.css";
import { Alert } from "react-bootstrap";

function Login() {
  const [home, setHome] = useState(true);
  const [flag, setFlag] = useState(false);
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [register, setRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let email = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emailLog || !passwordLog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordLog !== pass || emailLog !== email) {
      setFlag(true);
      console.log("Wrong");
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  const handleClick = () => {
    setRegister(!register);
  };

  return (
    <Fragment>
      {home ? (
        <div className={styles.login}>
          <h1>Welcome, </h1>
          <p>To continue browsing safely, log in to the network.</p>

          <img src={logoimage} alt="logo" />

          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(event) => setEmailLog(event.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(event) => setPasswordLog(event.target.value)}
            />
            <button type="submit">Login</button>
            <p onClick={handleClick}>Don't have an account?</p>

            {flag && (
              <Alert color="primary" variant="danger">
                Please Fill Every Field
              </Alert>
            )}
          </form>
        </div>
      ) : (
        <Home />
      )}
    </Fragment>
  );
}

export default Login;
