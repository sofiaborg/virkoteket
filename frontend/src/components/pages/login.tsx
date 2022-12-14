import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

export const Login = () => {
  const auth = useContext(AuthContext);

  //login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);

    await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => console.log(response.json()));

    // .then((data) => auth.login(data))
    // .catch((error) => console.error(error));
  };
  return (
    <div className="login">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <label>E-post</label>
        <input
          type="text"
          className="loginInput"
          placeholder="E-post"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Lösenord</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Lösenord"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Logga in
        </button>
      </form>

      <div>
        {" "}
        <button className="registerButton" type="submit">
          <Link className="link" to="/register">
            Registrera konto
          </Link>
        </button>
      </div>
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Hoppsan! Nu trasslade något ihop sig!
        </div>
      )}
    </div>
  );
};
