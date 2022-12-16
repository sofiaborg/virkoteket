import { useState } from "react";
import { Link, redirect } from "react-router-dom";

export const Register = () => {
  //register states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);

    await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ email, password, confirmPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("registrerad yay");
          setUserCreated(true);
        } else {
          console.log("funkade ej");
          setError(true);
        }
      });
  };
  return (
    <div className="register">
      <div className="registerTitle">Register</div>
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
        <label>Bekräfta lösenord</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Bekräfta lösenord"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
      {error ? (
        <div> Hoppsan! En användare med den mailadressen finns redan!</div>
      ) : (
        <div></div>
      )}
      {userCreated ? <div> Din användare är skapad!</div> : <div></div>}
    </div>
  );
};
