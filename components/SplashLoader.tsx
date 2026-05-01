"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function SplashLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}