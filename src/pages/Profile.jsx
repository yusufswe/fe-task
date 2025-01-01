import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [username, setUsername] = useState(user.user?.username || "");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    updateUserProfile(username);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10  p-6 bg-slate-800 dark:bg-gray-800 rounded-lg shadow">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white font-bold text-center">Edit Profile</h1>
        <label htmlFor="username" className="text-white">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full border-2 rounded-lg p-2 dark:text-black"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {success && (
          <div className="text-green-500 text-sm text-center">Profile updated successfully</div>
        )}
        <button className="w-full p-2 bg-slate-500  text-white rounded">Update Profile</button>
      </form>
    </div>
  );
}
