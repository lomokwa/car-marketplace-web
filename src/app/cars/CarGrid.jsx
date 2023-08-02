import CarCard from "./CarCard";

export default function CarGrid({ carGrid }) {

  return(
    <>
      <section className="text-gray-400 bg-gray-950 body-font m-0 p-5">
        <div className="container m-4">
          <div className="flex flex-wrap -m-4">
            {Array.isArray(carGrid) ? (carGrid.map(car => (
              <CarCard key={car._id} car={car} />
            ))) 
            : <p>Loading Cars...</p> 
            }
          </div>
        </div>
      </section>
    </>
  );
};
