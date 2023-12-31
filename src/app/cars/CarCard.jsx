"use client"
import { useState } from "react";
import ListingPageModal from "../../components/ListingPageModal";

export default function CarCard({ car }) {
  const [showListingPageModal, setShowListingPageModal] = useState(false);

  console.log(car.year, showListingPageModal);
  const handleClick = () => {
    setShowListingPageModal(true);
  };
  
  return(
    <>
      {showListingPageModal && <ListingPageModal car={car} setShowListingPageModal={setShowListingPageModal} />} 
        <div onClick={handleClick} className="m-3 my-5 w-full md:w-[18%] cursor-pointer bg-gray-100 dark:bg-gray-900 p-5 rounded-md">
          <div className="block relative h-48 rounded overflow-hidden">
            <img alt={`${car.make} ${car.model}`} className="object-cover object-center w-full h-full block" src={car.image} />
          </div>
          <div className="mt-4">
            <h3 className="text-gray-700 dark:text-gray-500 text-xs tracking-widest title-font mb-1">{car.year}</h3>
            <h2 className="text-gray-900 dark:text-white title-font text-lg font-medium">{car.make} {car.model}</h2>
            <p className="mt-1 text-gray-700 dark:text-gray-200 ">${car.price.toLocaleString()} | {car.mileage.toLocaleString()} Miles</p>
          </div>
        </div>
    </>
  );
};
