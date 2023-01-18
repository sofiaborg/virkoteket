import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/auth-context";

const validationSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/patterns");
    }
  }, [auth.isLoggedIn]);

  const onSubmit: SubmitHandler<ValidationSchema> = async () => {
    await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ email, username, password }),
    })
      .then((response) => response)
      .then((data) => {
        if (data.status === 200) {
          window.location.replace("http://localhost:3000/");
        } else if (data.status === 400) {
          setLoginFailed(true);
        }
      });
  };

  return (
    <div className="w-full h-full sm:h-screen flex flex-col sm:flex-row justify-evenly items-center ">
      <Link to="/" className="w-3/6 pt-2 sm:w-2/6">
        {" "}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/virkoteket.appspot.com/o/files%2FDesktop%20-%201.png?alt=media&token=a2c477a4-d7d2-45a9-90d9-d5608ea24fc1"
          alt="The Crochet club"
        />
      </Link>

      <div className="pb-12 sm:pt-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-element bg-white shadow-md rounded px-8 pt-6 pb-12 mb-4"
        >
          <div className="form-element mb-4">
            <label className="font-sans font-family: sans-open text-xs">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              {...register("email")}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-element mb-4">
            <label className="font-sans font-family: sans-open text-xs">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              {...register("username")}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-xs italic text-red-500 mt-2">
                {" "}
                {errors.username?.message}
              </p>
            )}

            {loginFailed ? (
              <p className="text-xs italic text-red-500 mt-2">
                This username aldready exists
              </p>
            ) : (
              <div></div>
            )}
          </div>

          <div className="form-element mb-6">
            <label className="font-sans font-family: sans-open text-xs">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

          <div className="form-element mb-6">
            <label className="font-sans font-family: sans-open text-xs">
              Confirm password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#ffa3a3] hover:bg-[#ff9290] text-white text-sm w-32 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-sans font-family: sans-open"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
