import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

const createSessionSchema = object({
  email: string().nonempty({
    message: "E-post krävs",
  }),
  password: string().nonempty({
    message: "Lösenord krävs",
  }),
});

type CreateSessionInput = TypeOf<typeof createSessionSchema>;

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });

  const onSubmit = async () => {
    await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        mode: "no-cors",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => auth.login(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <p>{loginError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="email">E-post</label>
          <input
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="password">Lösenord</label>
          <input
            id="password"
            type="password"
            placeholder="*********"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errors.password?.message}</p>
        </div>

        <button type="submit">Logga in</button>
      </form>
      <div>
        {" "}
        <button className="registerButton" type="submit">
          <Link className="link" to="/register">
            Registrera konto
          </Link>
        </button>
      </div>
    </>
  );
};
