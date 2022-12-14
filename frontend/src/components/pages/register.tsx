import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  //register states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);
    try {
      await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      })
        .then((response) => {
          //handle response
          console.log(response);
        })
        .then((data) => {
          //handle data
          console.log(data);
        })
        .catch((error) => {
          //handle error
        });
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>E-post</label>
        <input
          type="text"
          className="registerInput"
          placeholder="E-post"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Lösenord</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Lösenord"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Registrera konto
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Logga in
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Hoppsan! Nu trasslade något ihop sig!
        </span>
      )}
    </div>
  );
};
