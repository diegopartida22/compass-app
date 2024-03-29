import React, { useState } from "react";
import { Fragment } from "react";
import styles from "./Register.module.css";
import logoimage from "../../assets/logo.png";
// import Home from "../Home/Home";
import Login from "./Login";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !birthDate ||
      !country ||
      !city ||
      !email ||
      !password ||
      !password2
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Country", JSON.stringify(country));

      console.log("Saved In Local Storage");
      setLogin(!login);
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <Fragment>
      {login ? (
        <div className={styles.register}>
          <div className={styles.registerForm}>
            <h1>Welcome,</h1>
            <h2>Please, register to continue</h2>
            <form onSubmit={handleSubmit}>
              <label>First name</label>
              <input
                type="text"
                id="firstname"
                placeholder="Enter you first name"
                onChange={(event) => setFirstName(event.target.value)}
              />

              <label>Last name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter you last name"
                onChange={(event) => setLastName(event.target.value)}
              />

              <label htmlFor="date">Birth date</label>
              <input
                className="styles.form-date__input"
                type="date"
                id="date"
                placeholder="dd / mm / yyyy"
                onChange={(event) => setBirthDate(event.target.value)}
              />

              <label>Country</label>
              <input
                type="country"
                id="country"
                placeholder="Your Country"
                onChange={(event) => setCountry(event.target.value)}
              />

              <label>City</label>
              <input
                type="city"
                id="city"
                placeholder="Your City"
                onChange={(event) => setCity(event.target.value)}
              />

              <label htmlFor="e-mail">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="A valid email here"
                onChange={(event) => setEmail(event.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
              />

              <label htmlFor="password2">Password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirm your password"
                onChange={(event) => setPassword2(event.target.value)}
              />
              <button type="submit">Register</button>

              <p onClick={handleClick}>Already registered {""} login in?</p>
            </form>
          </div>

          <div className={styles.imageCont}>
            <img src={logoimage} alt="logo" />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </Fragment>
  );
}

export default Register;
