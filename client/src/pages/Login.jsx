import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", { email, password });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ ...data, password: "" });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h2 className="text-2xl lg:text-2xl text-slate-300 font-bold underline decoration-yellow-400/80">
          Login to your account
        </h2>
        <form onSubmit={loginUser} className="max-w-md w-full mt-8 space-y-6">
          <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-6 mb-8">
            <div className="w-full">
              <label htmlFor="email" className="text-gray-300 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="dark:bg-transparent appearance-none block w-full px-3 py-2.5 2xl:py-3 border border-gray-600 placeholder-gray-400 dark:placeholder-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="text-gray-300 font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="dark:bg-transparent appearance-none block w-full px-3 py-2.5 2xl:py-3 border border-gray-600 placeholder-gray-400 dark:placeholder-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
                placeholder="********"
                value={data.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex mx-20 px-20"
          >
            Login
          </button>
        </form>
        <div>
          <h3 className="w-full flex mx-20  my-7 text-slate-300">
            {" "}
            Don't have an account?{" "}
            <span>
              {" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium mx-1 hover:text-blue-200"
              >
                Sign Up
              </Link>{" "}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
