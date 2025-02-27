"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Loader from "./loading";
import StackedNotifications from "@/app/components/alert/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const confirmEmailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const removeNotif = () => {
    setNotification(null);
  };

  const validateInputs = () => {
    if (firstNameRef.current.value === "") {
      return "First Name is required!";
    }
    if (lastNameRef.current.value === "") {
      return "Last Name is required!";
    }
    if (emailRef.current.value === "") {
      return "Email is required!";
    }
    if (confirmEmailRef.current.value === "") {
      return "Confirm Email is required!";
    }
    if (emailRef.current.value !== confirmEmailRef.current.value) {
      return "Emails do not match!";
    }
    if (passwordRef.current.value === "") {
      return "Password is required!";
    }
    if (confirmPassRef.current.value === "") {
      return "Confirm Password is required!";
    }
    if (passwordRef.current.value !== confirmPassRef.current.value) {
      return "Passwords do not match!";
    }
    if (passwordRef.current.value.length < 8) {
      return "Password must be at least 8 characters long!";
    }
    if (passwordRef.current.value.search(/[a-z]/) < 0) {
      return "Password must contain at least one lowercase letter!";
    }
    if (passwordRef.current.value.search(/[A-Z]/) < 0) {
      return "Password must contain at least one uppercase letter!";
    }
    if (passwordRef.current.value.search(/[0-9]/) < 0) {
      return "Password must contain at least one number!";
    }
    if (passwordRef.current.value.search(/[@]/) < 0) {
      return "Password must contain the '@' symbol!";
    }
    return null;
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    const errorMessage = validateInputs();
    if (errorMessage) {
      setNotification({
        id: Math.random(),
        text: errorMessage,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxycgQJ4R3MwnpWkQRpV-tkmBmApAPuCA",
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
      if (!response.ok) {
        const message =
          response.status === 400
            ? "Email already exists."
            : "Something went wrong.";
        setNotification({
          id: Math.random(),
          text: message,
        });
        return;
      }

      const data = await response.json();
      setNotification({
        id: Math.random(),
        text: "Registration successful.",
      });
      UpdateProfile(data);
    } catch (error) {
      setNotification({
        id: Math.random(),
        text: "Something went wrong.",
      });
    }
  };

  async function UpdateProfile(data) {
    try {
      await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDxycgQJ4R3MwnpWkQRpV-tkmBmApAPuCA",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: data.idToken,
            displayName: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
          }),
        }
      );
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <StackedNotifications
        notification={notification}
        removeNotif={removeNotif}
      />
      <div className="flex flex-col items-center justify-center dark mt-6 mb-6">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
          <form className="flex flex-col" onSubmit={signUpHandler}>
            <div className="flex space-x-4 mb-4">
              <input
                placeholder="First Name"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                ref={firstNameRef}
              />
              <input
                placeholder="Last Name"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                ref={lastNameRef}
              />
            </div>
            <input
              placeholder="Email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              ref={emailRef}
            />
            <input
              placeholder="Confirm Email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              ref={confirmEmailRef}
            />
            <div className="relative mb-4">
              <input
                placeholder="Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className="relative mb-4">
              <input
                placeholder="Confirm Password"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type={showConfirmPassword ? "text" : "password"}
                ref={confirmPassRef}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </span>
            </div>
            <label
              className="text-sm mb-2 text-gray-200 cursor-pointer"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label
              className="text-sm mb-2 text-gray-200 cursor-pointer"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
              id="age"
              type="date"
            />
            <p className="text-white mt-4">
              Already have an account?
              <Link
                className="text-sm text-blue-500 hover:underline mt-4"
                href="/login"
              >
                Login
              </Link>
            </p>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
