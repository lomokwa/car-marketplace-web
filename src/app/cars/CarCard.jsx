export default function CarCard({ car }) {
  
  return(
      <div class="lg:w-1/4 md:w-1/2 p-10 md:p-4 w-full">
        <a href={car.url} target="_blank" rel="noreferrer">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt={`${car.make} ${car.model}`} class="object-cover object-center w-full h-full block" src={car.image} />
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{car.year}</h3>
            <h2 class="text-white title-font text-lg font-medium">{car.make} {car.model}</h2>
            <p class="mt-1">${car.price.toLocaleString()} | {car.mileage.toLocaleString()} Miles</p>
          </div>
        </a>
      </div>
  );
};
