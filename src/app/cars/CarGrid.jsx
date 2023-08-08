import CarCard from "./CarCard";
import SkeletonLoading from "./SkeletonLoading";

export default function CarGrid({ carGrid, loading }) {
  return (
    <>
    <section className="text-gray-400 bg-gray-200 dark:bg-gray-950 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {loading ? (
            Array.from({ length: 24 }).map((_, index) => (
              <SkeletonLoading key={index} /> 
            ))
          ) : (
            carGrid.map((car) => <CarCard key={car._id} car={car} />)
          )}
        </div>
      </div>
    </section>
  </>
);
}
