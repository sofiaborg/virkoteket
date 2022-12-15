import { Link } from "react-router-dom";

export const Login = () => {
  const requestOptionsPost = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors",
    },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/auth/login",
        requestOptionsPost
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {}
  };

  return (
    <>
      <h1>Log in page</h1>

      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your username..."
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
          />
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </>
  );
};
