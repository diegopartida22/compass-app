import React, { Fragment, useState } from "react";
// import Register from "./Register";
import Home from "../Home/Home";
import logoimage from "../../assets/logo.png";
import styles from "./Login.module.css";

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
          <div className={styles.loginForm}>
            <h1>Welcome, </h1>
            <p>To continue browsing safely, log in to the network.</p>

            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(event) => setEmailLog(event.target.value)}
              />
              <br></br>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(event) => setPasswordLog(event.target.value)}
              />
              <button className={styles.loginB} type="submit">
                Login
              </button>
              <p onClick={handleClick}>Don't have an account?</p>

              {/* {flag && <div>{alert("Please fill every field")}</div>} */}
            </form>
          </div>
          <div className={styles.imageCont}>
            <img src={logoimage} alt="logo" />
          </div>
        </div>
      ) : (
        <Home />
      )}
    </Fragment>
  );
}

export default Login;
