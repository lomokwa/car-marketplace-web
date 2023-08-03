import CarCard from "./CarCard";

export default function CarGrid({ carGrid }) {

  return(
    <>
      <section className="text-gray-400 bg-gray-950 body-font ">
        <div className="container mx-auto">
          <div className="flex flex-wrap w-full">
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
