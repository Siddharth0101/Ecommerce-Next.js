"use client";
import { useEffect, useState } from "react";
import Loader from "./loading";
import { useSelector } from "react-redux";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const displayName = useSelector((state) => state.token.displayName);
  const isLogged = useSelector((state) => state.token.isLogged);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      Profile Page
      {displayName}--{}
    </div>
  );
}
