"use client";

import "./Auth.css";

import { useRouter } from "next/navigation";

type AuthFormProps = {
  title: string;
};

export default function AuthForm({ title }: AuthFormProps) {
  const router = useRouter();

  const handleLogin = () => {
    if (title === "Student") {
      router.push("/student-dashboard");
    } else if (title === "Teacher") {
      router.push("/teacher-dashboard");
    } else if (title === "Institute") {
      router.push("/institute-dashboard");
    }
  };

  return (
    <div className="authContainer">
      <div className="authWrapper">
     

        <h2>{title} Portal</h2>

        <div className="tabs">
          <button className="active">
            Login
          </button>
        </div>

        <div className="formBox">
          <h3>Login</h3>

          <p>
            Kindly provide your CNIC number and password.
          </p>

          <label>CNIC *</label>
          <input
            type="text"
            placeholder="42301........"
          />

          <label>Password *</label>
          <input
            type="password"
            placeholder="Password"
          />

          <button
            className="loginBtn"
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}