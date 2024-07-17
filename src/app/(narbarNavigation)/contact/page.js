"use client";
import { useEffect, useState } from "react";
import Loader from "./loading";
import { FiftyFiftyHero } from "./contactContent";
export default function Contact() {
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
      <FiftyFiftyHero />
    </div>
  );
}
