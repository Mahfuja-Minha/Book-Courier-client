import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [show, setShow] = useState(false);
  const {
    user,
    signInWithGoogleFunc,
    signInWithEmailAndPasswordFunc,
    setLoading,
    setUser,
  } = useAuth();

  const navigate = useNavigate();

  if (user) {
    navigate("/");
    return;
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-10 p-8 lg:p-10">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-lime-500">
            Welcome Back
          </h1>
          <p className="mt-4 text-lg text-base-content">
            Sign in to access your account and continue exploring BookCourier.
          </p>
        </div>

        <div
          className="w-full max-w-md 
  bg-white/90 dark:bg-black/40
  border border-black/10 dark:border-white/20
  shadow-xl rounded-2xl p-8 backdrop-blur-lg"
        >
          
          <form onSubmit={handleSignIn} className="space-y-5">
            <h2 className="text-2xl font-semibold text-center text-base-content">
              Sign In
            </h2>

            <div>
              <label className="block text-sm mb-1 text-base-content">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-base-100 text-base-content"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1 text-base-content">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-base-100 text-base-content"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50 text-base-content"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-lime-500 hover:bg-lime-600 text-white font-semibold"
            >
              Login
            </button>

            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-base-300"></div>
              <span className="text-sm text-base-content">or</span>
              <div className="h-px w-16 bg-base-300"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 border border-lime-500 text-lime-500 px-5 py-2 rounded-lg w-full font-semibold hover:bg-base-200"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-base-content mt-3">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-lime-500 hover:text-lime-600 underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;