"use client"

import { useEffect, useState } from "react";
import CarCard from "./CarCard";


export default function CarGrid() {
  const [carGrid, setCarGrid] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/listings")
      .then(res => res.json())
      .then((data) => {
        setCarGrid(data)
      })
      .catch(alert)
  }, []);
  
  return(
    <section class="text-gray-400 bg-gray-950 body-font m-0 p-5">
      <div class="container p mx-auto mt-0">
        <div class="flex flex-wrap -m-4">
          {carGrid.map(car => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};
