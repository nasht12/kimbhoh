"use client";
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // This will clear the timer if the component is unmounted before the 2 seconds are up
  }, []);

  if (loading) {
    return null; // You can return null, or some kind of placeholder or loading spinner here
  }

  return (
    <div>Skeleton</div>
  );
}