import { useEffect, useState } from "react";

export default function AddListingModal({ setShowModal }) {
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedTransmission, setSelectedTransmission] = useState("")

  function handleSelectedMake(e) {
    const selectedMakeValue = e.target.value
    setSelectedMake(selectedMakeValue)

    fetch(`http://127.0.0.1:4000/getmodels/${selectedMakeValue}`)
      .then(res => res.json())
      .then((data) => {
        setModelList(data)
        console.log("makeList:", data);
      })
      .catch(alert)
  };

  function handleSelectedModel(e) {
    setSelectedModel(e.target.value)
  };

  function handleSelectedTransmission(e) {
    setSelectedTransmission(e.target.value)
  };


  useEffect(() => {
    fetch(`http://127.0.0.1:4000/getmakes/`)
      .then(res => res.json())
      .then((data) => {
        setMakeList(data)
        console.log("makeList:", data);
      })
      .catch(alert)
  }, []);


  console.log(selectedTransmission)
  console.log(selectedMake)
  console.log(selectedModel)

  return(
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-gray-900 font-semibold">
                New Listing
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-gray-900">
              <form>
                <div> {/* Make selector */}
                  {makeList.length > 0 ? 
                    <select onChange={handleSelectedMake} name="make" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="make" selected disabled>Make</option>
                      {makeList.map((make) => (
                        <option  key={make.index} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                    : <p>Loading...</p>
                 }
                </div>
                <div> {/* Model selector */}
                  {modelList.length > 0 ?
                    <select
                      onChange={handleSelectedModel}
                      name="model"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="model" defaultValue>Model</option>
                      {modelList.map((model) => (
                        <option key={model.index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                    : <p>Model: Select a make first.</p>
                  }
                </div>
                <input placeholder="Year" name="year" type="number" maxLength={4} minLength={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <input placeholder="Price" name="price" type="number" maxLength={4} minLength={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <input placeholder="Mileage" name="mileage" type="number" maxLength={4} minLength={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <input placeholder="Listing URL" name="url" type="string" maxLength={4} minLength={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <select
                  onChange={handleSelectedTransmission}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  <option value="transmission" defaultValue>Transmission</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
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
                type="button"
                onClick={() => setShowModal(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
