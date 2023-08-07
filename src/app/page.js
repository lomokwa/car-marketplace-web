export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section
          className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <img
            alt="Night"
            src="/images/carmeet3.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <img src="/images/logo.png" className="object-scale-down h-36 "/>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Collector's Car Hub
            </h2>

          </div>
        </section>

        <main className="flex items-center justify-start mx-8 my-8 sm:mx-12 lg:col-span-7 lg:mx-16 lg:my-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-xl font-bold text-gray-900 dark:text-white  sm:text-3xl md:text-5xl">We love cars.</h1>
                <h2 className="py-5 text-xl">Collector's Car Hub is a user-curated marketplace built for enthusiasts, by enthusiasts.</h2>
                <h3 className="text-xl">Let us help you find your dream car with our handpicked selection, tailored by passionate automobile lovers like you.</h3>
                <a href="/cars" className="flex justify-center mt-20 mx-52 text-2xl font-semibold p-3 rounded-lg bg-amber-500 text-l hover:bg-amber-600">Check our listings!</a>
          </div>
        </main>
      </div>
    </section>
  );
};
