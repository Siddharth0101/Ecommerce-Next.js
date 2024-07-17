"use client";
import { useEffect, useState } from "react";
import Loader from "./loading";
import ModernCarousel from "./aboutContact";

export default function About() {
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
  return (
    <div>
      <ModernCarousel />
    </div>
  );
}
