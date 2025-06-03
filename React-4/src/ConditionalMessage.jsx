import React, { useState } from "react";

const ConditionalMessage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoggedIn = () => {
    if (!email || !password) {
      setError("Both are requred");
      return;
    }
    setIsLoggedIn(true);
    setError("");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="min-h-screen min-w-screen bg-slate-200 rounded-2xl text-center">
      {isLoggedIn ? (
        <>
          <p className="text-xl font-semibold text-green-700">
            welcome Back, {email} !
          </p>
          <button
            className="px-4 py-2 mt-10 bg-red-500 text-white rounded hover:bg-red-700 transition"
            onClick={() => handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="text-2xl font-medium text-gray-800">Please Login</p>
          <input
            className="w-1/4 px-3 py-2 rounded-2xl border my-4"
            type="email"
            placeholder="enter your email address......"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="w-1/4 px-4 py-2 rounded-2xl border "
            placeholder="enter your password...."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            onClick={handleLoggedIn}
            className="w-1/4 mt-2 py-2 px-4 rounded-3xl bg-amber-500 hover:bg-amber-700 transition"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default ConditionalMessage;
