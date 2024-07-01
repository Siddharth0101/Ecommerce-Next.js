"use client";
import { useEffect, useState } from "react";
import Loader from "./loading";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return <div>Profile Page</div>;
}
