import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/state';
import { useDispatch } from 'react-redux';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch ("http://localhost:8000/api/v1/athentication/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      /* Get data after fetching */
      const loggedIn = await response.json()

      if (loggedIn) {
        dispatch(login({ user: loggedIn.user, token: loggedIn.token })); // Dispatch the login action with payload
        navigate("/");
      }
    } catch (err) {
      // Handle login errors (optional)
      console.error("Login failed:", err.message);
    }
  };
  return (
    <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4" style={{ backgroundImage: "url(https://readymadeui.com/background-image.webp)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <form onSubmit={handleSubmit} className="bg-opacity-70 w-[400px]  bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] ">
        <h3 className="text-3xl font-extrabold mb-10">Sign in</h3>

        <div className="relative flex items-center">
          <input
            onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="text" required className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]" placeholder="Enter email" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
              </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
              <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
            </g>
          </svg>
        </div>
        <div className="relative flex items-center mt-8">
          <input
            onChange={(e) => setPassword(e.target.value)} value={password} name="password" type="password" required className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]" placeholder="Enter password" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
          </svg>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button type="submit" className="text-sm font-semibold hover:underline">
            Forgot Password?
          </button>
        </div>
        <div className="mt-4">
          <button type="submit" className="w-full py-3 px-4 text-sm font-semibold  text-white bg-blue-600 hover:bg-blue-700 focus:outline-none rounded-3xl">
            Sign in
          </button>
          <p className="text-sm text-center mt-6">Don't have an account <Link to="/register" className="font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
        </div>
        <hr className="my-6 border-gray-500" />
      </form>
    </div>
  );
}

export default Login;
