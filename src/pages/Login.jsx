import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { user, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user.isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form className="w-[300px] space-y-4" onSubmit={handleLogin}>
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 w-full block p-3 rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 w-full block p-3 rounded-lg"
          placeholder="Password"
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <button className="w-full p-2 text-white rounded bg-indigo-500">Submit</button>
      </form>
    </main>
  );
}
