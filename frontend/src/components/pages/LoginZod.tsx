import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

const validationSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(6, { message: "Your password is at least 6 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async () => {
    await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ username, password }),
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
          setLoginFailed(true);
          console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-element bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="text-center">LOGO</div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            className="username shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            {...register("username")}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {errors.username && (
          <p className="text-xs italic text-red-500 mt-2">
            {" "}
            {errors.username?.message}
          </p>
        )}

        <div className="form-element mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="password shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-xs italic text-red-500 mt-2">
              {" "}
              {errors.password?.message}
            </p>
          )}
        </div>

        {loginFailed ? (
          <p className="pb-4 text-xs italic text-red-500 mt-2">
            No user with that username, please register first!
          </p>
        ) : (
          <div></div>
        )}

        <div className="flex items-center justify-between">
          <button
            id="login"
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
          <a
            className="register-button inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800"
            href="/register"
          >
            Register here
          </a>
        </div>
      </form>
    </div>
  );
};
