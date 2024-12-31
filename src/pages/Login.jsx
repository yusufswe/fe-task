import React from "react";

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen">
      <form className="w-[300px] space-y-4">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <input
          type="text"
          className="border-2 w-full block p-3 rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          className="border-2 w-full block p-3 rounded-lg"
          placeholder="Password"
        />
        <button className="w-full p-2 text-white rounded bg-indigo-500">Submit</button>
      </form>
    </main>
  );
}
