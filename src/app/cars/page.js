"use client"

import CarGrid from "@/components/CarGrid"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from "react";

export default function Home() {
  const [carGrid, setCarGrid] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:4000/listings")
      .then(res => res.json())
      .then((data) => {
        setCarGrid(data)
      })
      .catch(alert)
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
