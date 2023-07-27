"use client"

import CarGrid from "@/app/cars/CarGrid"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from "react";

export default function Home() {
  const [carGrid, setCarGrid] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://car-marketplace-api.web.app/listings")
      .then(res => res.json())
      .then((data) => {
        setCarGrid(data)
      })
      .catch((error) => {
        console.error("Failed to fetch:", error);
        setError("Failed to get listings. Please try again.")
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
    <>
      <Navbar setCarGrid={setCarGrid}/>
      <main className=" min-h-screen flex-col items-center justify-between bg-gray-950">
        <CarGrid carGrid={carGrid}/>
      </main>
    </>
  );
};
