import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const Login = () => {
  //login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [token, setToken] = useState(null);
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(false);

    await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        mode: "no-cors",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => sessionStorage.setItem("userInfo", JSON.stringify(data)))
      .catch((error) => console.error(error));
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
