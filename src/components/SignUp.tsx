import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const existingUser = JSON.parse(storedUser);

      // Check if the entered email already exists
      if (existingUser.email === email) {
        setError("An account with this email already exists.");
        return;
      }
    }

    // Create a new user object with the form data
    const newUser = {
      name,
      email,
      password,
    };

    // Save the new user data in local storage
    localStorage.setItem("user", JSON.stringify(newUser));

    // Clear error message if successful and navigate to login
    setError("");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="p-6 flex flex-col gap-6 bg-white shadow-lg rounded-lg w-80"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
