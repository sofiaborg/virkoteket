import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

const createSessionSchema = object({
  email: string().min(1, "Please enter email"),
  password: string().min(1, "Please enter password"),
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
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response;
        }
      })
      .then((data) => {
        if (data.token) {
          auth.login(data);
          window.location.replace("http://localhost:3000/patterns");
        } else {
          setLoginError(data);
        }
      })
      .catch((error) => setLoginError(error));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p>{loginError}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-element bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="text-center">LOGO</div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p>{errors.email?.message}</p>

        <div className="form-element mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*********"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic">
            {errors.password?.message}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800"
            href="/register"
          >
            Register here
          </a>
        </div>
      </form>
    </div>
  );
};
