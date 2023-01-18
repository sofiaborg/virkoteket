import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth-context";

const validationSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "You need to enter a password" }),
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

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/patterns");
    }
  }, [auth.isLoggedIn]);

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
          navigate("/patterns");
        } else {
          setLoginFailed(true);
          console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full h-full sm:h-screen flex flex-col sm:flex-row justify-evenly items-center ">
      <div className="w-3/6 pt-2 sm:w-2/6">
        {" "}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/virkoteket.appspot.com/o/files%2FDesktop%20-%201.png?alt=media&token=a2c477a4-d7d2-45a9-90d9-d5608ea24fc1"
          alt="The crochet club"
        />
      </div>

      <div className="pb-12 sm:pt-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-element bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-1">
            <label className="font-sans font-family: sans-open text-xs">
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
            <p className="text-xs italic text-red-500 pb-6">
              {" "}
              {errors.username?.message}
            </p>
          )}

          <div className="form-element mb-1">
            <label className="font-sans font-family: sans-open text-xs">
              Password
            </label>
            <input
              className="password shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-xs italic text-red-500">
                {" "}
                {errors.password?.message}
              </p>
            )}
          </div>

          {loginFailed ? (
            <p className="pb-4 text-xs italic text-red-500">Wrong password</p>
          ) : (
            <div></div>
          )}

          <div className="flex items-center justify-between pt-4">
            <a
              id="register-button"
              className="inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800 font-sans font-family: sans-open text.sm"
              href="/register"
            >
              Register here
            </a>
            <button
              id="login-button"
              className="bg-[#ffa3a3] hover:bg-[#ff9290] text-white text-sm w-32 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans font-family: sans-open"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
