import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";
import { login } from "../../../services/authService";

import "../styles/LoginForm.css";

function LoginForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await login(email, password);

    localStorage.setItem("token", data.token);

    localStorage.setItem(
      "admin",
      JSON.stringify(data.admin)
    );

    navigate("/dashboard");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};

  return (

    <div className="login-card">

      <div className="login-header">

        <div className="login-logo">

          WI

        </div>

        <h1>WorkforceIQ</h1>

        <p>

          Login to access your dashboard.

        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <FiMail />

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

          />

        </div>

        <div className="input-group">

          <FiLock />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

          />

        </div>

        <div className="remember">

          <label>

            <input type="checkbox" />

            Remember Me

          </label>

        </div>

        <button
          type="submit"
          className="login-btn"
        >

          Login

        </button>

      </form>

      <div className="back-home">

        <Link to="/">

          ← Back to Home

        </Link>

      </div>

    </div>

  );

}

export default LoginForm;