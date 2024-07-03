"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Loading from "./loading";
import StackedNotifications from "@/app/components/alert/alert";
import { useDispatch } from "react-redux";
import { TokenSliceActions } from "@/app/store/tokenSlice";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const removeNotif = () => {
    setNotification(null);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (emailRef.current.value === "") {
      setNotification({
        id: Math.random(),
        text: "Email field is empty",
      });
      return;
    }
    if (passwordRef.current.value === "") {
      setNotification({
        id: Math.random(),
        text: "Password field is empty",
      });
      return;
    }
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxycgQJ4R3MwnpWkQRpV-tkmBmApAPuCA",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setNotification({
            id: Math.random(),
            text: "Wrong credentials. Please check your email and password.",
          });
        }
        return;
      }

      dispatch(TokenSliceActions.DISPLAYNAME(responseData.displayName));
      dispatch(TokenSliceActions.LOGIN());
      localStorage.setItem("token", responseData.idToken);

      setNotification({
        id: Math.random(),
        text: "Login successful! Welcome back.",
      });
    } catch (error) {
      setNotification({
        id: Math.random(),
        text: "Something went wrong.",
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center mt-6 mb-6">
      <StackedNotifications
        notification={notification}
        removeNotif={removeNotif}
      />
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
      >
        <h2
          style={{ animation: "appear 2s ease-out" }}
          className="text-center text-4xl font-extrabold text-white"
        >
          Welcome
        </h2>
        <p
          style={{ animation: "appear 3s ease-out" }}
          className="text-center text-gray-200"
        >
          Sign in to your account
        </p>
        <form method="POST" action="#" className="space-y-6">
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="email"
              name="email"
              type="email"
              ref={emailRef}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="email"
            >
              Email address
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <button
              type="button"
              className="absolute right-0 top-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825a3 3 0 01-1.875.675 3 3 0 01-1.875-.675M9.028 9.028a3 3 0 014.245 4.245M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a className="text-sm text-purple-200 hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
            onClick={loginHandler}
          >
            Log In
          </button>
        </form>
        <div className="text-center text-gray-300">
          Don't have an account?
          <Link className="text-purple-300 hover:underline" href="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
