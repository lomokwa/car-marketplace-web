import { useEffect, useState } from "react";

export default function AddListingModal({ setShowModal, setCarGrid }) {
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [url, setUrl] = useState("");

   // Fetch makes
   useEffect(() => {
    fetch(`https://car-marketplace-api.web.app/getmakes/`)
      .then((res) => res.json())
      .then((data) => {
        setMakeList(data);
        console.log("makeList:", data);
      })
      .catch(alert);
  }, []);

  // Fetch models given make
  function handleSelectedMake(e) {
    const selectedMakeValue = e.target.value;
    setSelectedMake(selectedMakeValue);

    fetch(`https://car-marketplace-api.web.app/getmodels/${selectedMakeValue}`)
      .then((res) => res.json())
      .then((data) => {
        setModelList(data);
        console.log("makeList:", data);
      })
      .catch(alert);
  };

  function handleSelectedModel(e) {
    const selectedModelValue = e.target.value;
    setSelectedModel(selectedModelValue);
  };

  function handleSelectedTransmission(e) {
    const selectedTransmissionValue = e.target.value;
    setSelectedTransmission(selectedTransmissionValue);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formattedUrl = url.split("?")[0]
    const yearAsNumber = parseInt(year, 10);
    const priceAsNumber = parseFloat(price);
    const mileageAsNumber = parseInt(mileage, 10);

    if (
      !selectedMake ||
      !selectedModel ||
      !selectedTransmission ||
      !yearAsNumber ||
      !priceAsNumber ||
      !mileageAsNumber ||
      !formattedUrl
    ) {
      alert("Please fill in all fields.");
      return;
    };

    const newListing = {                     
      make: selectedMake,
      model: selectedModel,
      transmission: selectedTransmission,
      year: yearAsNumber,
      price: priceAsNumber,
      mileage: mileageAsNumber,
      url: formattedUrl,
    };

    fetch(`https://car-marketplace-api.web.app/listings/newlisting`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newListing),
    })
      .then(res => res.json())
      .then((data) => {
        setCarGrid(data);
        setShowModal(false);
      })
      .catch(alert)
  };
 
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative sm:w-1/2 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-gray-100 font-semibold">
                New Listing
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-gray-900">
              <form>
                <div className="p-2">
                  {" "}
                  {/* Make selector */}
                  {makeList.length > 0 ? (
                    <select
                      value={selectedMake}
                      onChange={handleSelectedMake}
                      name="make"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" selected disabled>
                        Make
                      </option>
                      {makeList.map((make) => (
                        <option key={make.index} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
                <div className="p-2">
                  {" "}
                  {/* Model selector */}
                  {modelList.length > 0 ? (
                    <select
                      value={selectedModel}
                      onChange={handleSelectedModel}
                      name="model"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" selected disabled>
                        Model
                      </option>
                      {modelList.map((model) => (
                        <option key={model.index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      Model: Select a make first.
                    </p>
                  )}
                </div>
                <div className="p-2">
                  <select
                    value={selectedTransmission}
                    onChange={handleSelectedTransmission}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" selected disabled>
                      Transmission
                    </option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>
                </div>
                <div className="p-2">
                  <input
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    placeholder="Year"
                    name="year"
                    type="number"
                    maxLength={4}
                    minLength={4}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="p-2">
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Price"
                    name="price"
                    type="number"
                    maxLength={4}
                    minLength={4}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="p-2">
                  <input
                    onChange={(e) => setMileage(e.target.value)}
                    value={mileage}
                    placeholder="Mileage"
                    name="mileage"
                    type="number"
                    maxLength={4}
                    minLength={4}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="p-2">
                  <input
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    placeholder="Listing URL"
                    name="url"
                    type="string"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </form>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70  fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
