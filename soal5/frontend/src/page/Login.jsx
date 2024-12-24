import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login gagal. Periksa email atau password.");
      }

      const data = await response.json();

      alert(`Selamat datang, ${data.name || "Pengguna"}!`);
      console.log("Token:", data.token);
    } catch (error) {
      setError(error.message);
      console.error("Error selama login:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Logo />
      <p className="text-gray-600 text-center mb-6">
        Selamat datang di Aplikasi <br /> <strong>Were Chatting</strong>
      </p>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center gap-4 w-full max-w-sm p-6 bg-white shadow-md rounded-lg"
      >
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Link to="/dashboard">
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
