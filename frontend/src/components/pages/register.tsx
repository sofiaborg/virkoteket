import { useState } from "react";
import { Link, redirect } from "react-router-dom";

export const Register = () => {
  //register states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<Boolean>(false);
  const [mailError, setMailError] = useState<Boolean>(false);

  const [userCreated, setUserCreated] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ email, password, confirmPassword }),
    })
      .then((response) => response)
      .then((data) => {
        if (data.status === 200) {
          setUserCreated(true);
        } else {
          console.log(data);
          console.log("funkade ej");
          setPasswordError(true);
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
        <Link className="link" to="/">
          Logga in
        </Link>
      </button>
      {passwordError ? <div> Lösenorden matchar inte!</div> : <div></div>}
      {userCreated ? <div> Din användare är skapad!</div> : <div></div>}
    </div>
  );
};
