import React from 'react';
import { FcGoogle } from "react-icons/fc";
const Login = () => {

   const handleGoogleSignIn = () => {
    console.log("Google sign in done")
   }
   

  return (
    <div>
      <h1 className='text-3xl m-5 text-center'>Please login</h1>
     <div className="flex justify-center">
  <button onClick={handleGoogleSignIn} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300">
    <FcGoogle className="text-2xl" />
    <span>Sign in with Google</span>
  </button>
</div>



    </div>
  );
};

export default Login;