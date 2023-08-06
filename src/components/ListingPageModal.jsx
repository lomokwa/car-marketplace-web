import { AuthContext } from "@/context/AuthContext";
import { useState, useEffect } from "react";

export default function ListingPageModal ({ car, setShowListingPageModal }) {
  const [hasClickedButton, setHasClickedButton] = useState(() => {
    const hasClicked = localStorage.getItem(`like:${car._id}`);
    return hasClicked === "true";
  });

  const [likesCount, setLikesCount] = useState(car.rating);

  useEffect(() => {
    setLikesCount(car.rating);
  }, [car.rating]);

  function handleRatingClick() {
    if(hasClickedButton === false) {
      fetch(`https://car-marketplace-api.web.app/listings/increase-rating/${car._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHasClickedButton(true);
        localStorage.setItem(`like:${car._id}`, true);
        }
      )
    } else {
      fetch(`https://car-marketplace-api.web.app/listings/decrease-rating/${car._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHasClickedButton(false);
        localStorage.setItem(`like:${car._id}`, false);
        }
      )
    }
    
  };

  return(
    <>
    <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none h-full w-full ">
      <section className="text-gray-200 bg-gray-900 body-font overflow-hidden border border-red-500">
        <button
          className="top-0 left-0 ml-4 mt-4 text-gray-300 text-2xl bg-red-500 rounded-lg px-3 pb-1 hover:bg-red-600 focus:outline-none"
          onClick={() => setShowListingPageModal(false)}>
          &times;
        </button>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="md:w-1/2 w-full md:h-[600px] h-64 object-cover object-center rounded" src={car.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-300 tracking-widest">{car.year}</h2>
              <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">{car.make} {car.model}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="fill-red-500 w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">{likesCount} {likesCount === 1 ? "Like" : "Likes"}</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed w-fit md:w-auto h-24 md:h-80 overflow-y-auto">{!car.description ? "No description available." : `"${car.description}"`}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">{car.transmission} transmission</span>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">{car.mileage.toLocaleString()} Miles</span>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-100">${car.price.toLocaleString()}</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                <button onClick={handleRatingClick} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className={`w-5 h-5 ${hasClickedButton && "fill-red-500"}`} viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="opacity-70  fixed inset-0 z-40 bg-black"></div>
    </>
  )
}