"use client"

import { useState, useContext } from "react";

export default function SearchDropdown({ makeList, queryString, setQueryString }) {


  const [modelList, setModelList] = useState([]);

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");

  function handleSelectedTransmission(e) {
    const selectedTransmissionValue = e.target.value;
    setSelectedTransmission(selectedTransmissionValue);
    console.log(selectedTransmissionValue)
  };

  function handleSelectedModel(e) {
    const selectedModelValue = e.target.value;
    setSelectedModel(selectedModelValue);
    console.log(selectedModelValue)
  };

  // Fetch models given make
  function getModels(e) {
    const selectedMakeValue = e.target.value;
    setSelectedMake(selectedMakeValue)

    fetch(`https://car-marketplace-api.web.app/getmodels/${selectedMakeValue}`)
      .then((res) => res.json())
      .then((data) => {
        setModelList(data);
      })
      .catch((error) => {
        console.error(error); });
      console.log(selectedMakeValue)
  };

  function makeQueryString() {
      queryString = ""
      if(selectedMake) setQueryString(queryString += `make=${selectedMake}&`)
      if(selectedModel) setQueryString(queryString += `model=${selectedModel}&`)
      if(selectedTransmission) setQueryString(queryString += `transmission=${selectedTransmission}&`)
    };

  function handleReset() {
    setQueryString("")
  };

  return(
    <div className="flex gap-8 pb-5 justify-center">
      <div className="relative">
        <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
          <div className="w-96 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
            {makeList.length > 0 ? (
              <select
                value={selectedMake}
                onChange={getModels}
                name="make"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="" selected disabled className="opacity-50">
                    Make
                  </option>
                  {makeList.map((make) => (
                    <option key={make.index} value={make}>
                      {make}
                    </option>
                  ))}
              </select>
            ) : (
              <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Loading Makes...
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
          <div
            className="w-96 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-offset-gray-900">
            {modelList.length > 0 ? (
              <select
                value={selectedModel}
                onChange={handleSelectedModel}
                name="model"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" selected>
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
        </div>
      </div>
      <div className="relative">
        <div
          className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
          <div
            className="w-96 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-offset-gray-900">
            <select
              name="transmission"
              value={selectedTransmission}
              onChange={handleSelectedTransmission}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">
                Transmission: Any
              </option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
        </div>
      </div>
      <button onClick={makeQueryString} className="hover:text-blue-500">
        Search
      </button>
      <button onClick={handleReset} className="hover:text-blue-500">
        Reset
      </button>
    </div>
  )
};