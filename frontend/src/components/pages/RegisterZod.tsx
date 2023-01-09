import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const createUserSchema = object({
  password: string().min(6, "Lösenordet måste vara minst 6 tecken").nonempty({
    message: "Lösenord krävs",
  }),
  confirmPassword: string().nonempty({
    message: "Bekräfta lösenordet",
  }),
  email: string({
    required_error: "E-post krävs",
  })
    .email("Denna e-post är ej giltlig")
    .nonempty({
      message: "Lösenord krävs",
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Lösenorden matchar inte",
  path: ["passwordConfirmation"],
});

type CreateUserInput = TypeOf<typeof createUserSchema>;

export const RegisterPage = () => {
  const [registerError, setRegisterError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async () => {
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
          window.location.replace("http://localhost:3000/");
        } else if (data.status === 400) {
          setRegisterError("Denna mail används redan");
        }
      });
  };

  console.log({ errors });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <p>{registerError}</p>
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
            placeholder="jane.doe@example.com"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{errors.email?.message}</p>
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
            placeholder="*********"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic">
            {errors.password?.message}
          </p>
        </div>

        <div className="form-element mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordConfirmation"
          >
            Confirm password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="passwordConfirmation"
            type="password"
            placeholder="*********"
            {...register("confirmPassword")}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="text-red-500 text-xs italic">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
