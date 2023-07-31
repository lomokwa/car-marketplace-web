export default function ListingPageModal ({car, setShowListingPageModal}) {
  return(
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full w-full">
        <section className="text-gray-200 body-font overflow-hidden bg-gray-900" >
          <button
            className="top-0 left-0 ml-4 mt-4 text-gray-300 text-2xl bg-red-500 rounded-lg px-3 pb-1 hover:bg-red-600 focus:outline-none"
            onClick={() => setShowListingPageModal(false)}>
            &times;
          </button>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-300 tracking-widest">{car.year}</h2>
                <h1 className="text-gray-200 text-3xl title-font font-medium mb-4">{car.make} {car.model}</h1>
                <div className="flex mb-4">
                  <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                </div>
                <p className="leading-relaxed mb-4">{!car.description ? "No description available." : `"${car.description}"`}</p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-300">Mileage:</span>
                  <span className="ml-auto text-gray-200">{car.mileage.toLocaleString()} Miles</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-300">Transmission:</span>
                  <span className="ml-auto text-gray-200">{car.transmission}</span>
                </div>
                <div className="flex border-t mb-6 border-gray-200 py-2">
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-200">${car.price.toLocaleString()}</span>
                  <a href={car.url} target="_blank" rel="noreferrer" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    <button>Original Listing &rarr;</button>
                  </a>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-300 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 w-full max-h-[400px]">
              <img alt={`${car.make} ${car.model}`} className="w-full h-full object-cover object-center rounded" src={car.image} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="opacity-70  fixed inset-0 z-40 bg-black"></div>
   </>
  );
};
