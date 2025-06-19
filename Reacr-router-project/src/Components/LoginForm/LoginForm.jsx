import React from 'react';

const LoginForm = () => {
  return (
    <div>
         <div className="max-w-sm mx-auto mt-16 p-6 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      <form>
        <label
          htmlFor="email"
          className="block mb-1 font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          autoComplete="email"
        />

        <label
          htmlFor="password"
          className="block mb-1 font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
        >
          Log In
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;