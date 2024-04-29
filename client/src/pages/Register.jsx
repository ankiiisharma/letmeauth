import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
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

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const { data: responseData } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ name: "", email: "", password: "" });
        toast.success(`Registration successful, Welcome ${name}!`);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error at:", error.response || error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div>
        <h2 className="text-2xl lg:text-2xl font-semibold text-slate-300 underline decoration-yellow-400/80">
          Sign up for an account
        </h2>
        <form
          onSubmit={registerUser}
          className="max-w-md w-full mt-8 space-y-6"
        >
          <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-6 mb-8">
            <div className="w-full">
              <label htmlFor="name" className="text-gray-300 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={data.name}
                onChange={handleChange}
                className="dark:bg-transparent appearance-none block w-full px-3 py-2.5 2xl:py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-gray-300 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                value={data.email}
                onChange={handleChange}
                className="dark:bg-transparent appearance-none block w-full px-3 py-2.5 2xl:py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="text-gray-300 font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                className="dark:bg-transparent appearance-none block w-full px-3 py-2.5 2xl:py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-600 text-gray-100 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-20 px-20"
          >
            Submit
          </button>
        </form>

        <div>
          <h3 className="w-full flex mx-20  my-7 text-slate-300">
            {" "}
            Already have an account?{" "}
            <span>
              {" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium mx-1 hover:text-blue-200 hover:underline decoration-yellow-400/80"
              >
                Sign in
              </Link>{" "}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
