import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf, z } from "zod";
import { useState, useEffect } from "react";

const validationSchema = z
  .object({
    name: z.string().min(1, { message: "Firstname is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (validationData) => {
    setName(validationData.name);
    setEmail(validationData.email);
    setPassword(validationData.password);
    fetchData();
  };

  const fetchData = async () => {
    await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({ email, name, password }),
    })
      .then((response) => response)
      .then((data) => {
        if (data.status === 200) {
          window.location.replace("http://localhost:3000/");
        } else if (data.status === 400) {
          console.log("Denna mail används redan");
        }
      });
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-element bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="text-center">LOGO</div>
        <div className="form-element mb-4">
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
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {" "}
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="form-element mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs italic text-red-500 mt-2">
              {" "}
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="form-element mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs italic text-red-500 mt-2">
              {" "}
              {errors.password?.message}
            </p>
          )}
        </div>

        <div className="form-element mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
