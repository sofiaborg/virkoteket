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
    <>
      <p>{registerError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="*********"
            {...register("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="passwordConfirmation">Confirm password</label>
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="*********"
            {...register("confirmPassword")}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
