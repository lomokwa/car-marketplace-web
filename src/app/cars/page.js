"use client"

import CarGrid from "@/app/cars/CarGrid"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from "react";

export default function Home() {
  const [carGrid, setCarGrid] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [makeList, setMakeList] = useState([]);

  const [queryString, setQueryString] = useState("");


  // Fetch all makes
  useEffect(() => {
    fetch(`https://car-marketplace-api.web.app/getmakes/`)
      .then((res) => res.json())
      .then((data) => {
        setMakeList(data);
        console.log("makeList:", data);
      })
      .catch(alert);
  }, []);

  useEffect(() => {
    console.log(queryString)
    fetch(`https://car-marketplace-api.web.app/listings?${queryString}`)
      .then(res => res.json())
      .then((data) => {
        setCarGrid(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch:", error);
        setError("Failed to get listings. Please try again.");
        setLoading(false);
      })
  }, [queryString])
  
  return (
    <>
      <Navbar setCarGrid={setCarGrid} makeList={makeList} queryString={queryString} setQueryString={setQueryString} />
      <main className=" min-h-screen flex-col items-center justify-between bg-gray-950">
        <CarGrid carGrid={carGrid} loading={loading}/>
      </main>
    </>
  );
};
