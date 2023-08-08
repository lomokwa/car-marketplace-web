"use client"

import { useState, useContext } from "react";
import AddListingModal from "./AddListingModal";
import { AuthContext } from "@/context/AuthContext";
import LoginFormModal from "@/components/LoginFormModal";
import SearchDropdown from "@/components/SearchDropdown";

export default function Navbar({ setCarGrid, makeList, queryString, setQueryString }) {
  const [showListingModal, setShowListingModal] = useState(false)
  const [showLoginModal, setShowLogingModal] = useState(false)
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)

  const { user, handleLogout } = useContext(AuthContext)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-20 mt-0 mb-0 p-5">
        <a href="/" className="flex items-center">
          <img
            src="../images/logo.png"
            className="h-16 mr-3"
            alt="Collector's Car Hub Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Collector's Car Hub
          </span>
        </a>

        <div className="flex md:order-2 mt-4 md:mt-0">
          <div className="mr-4">
            <button
              type="button"
              onClick={() => {
                !user ? alert("You must be logged in to add a listing.")
                      : setShowListingModal(true)
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add New Listing
            </button>
          </div> 
          {showListingModal ? <AddListingModal setShowListingModal={setShowListingModal} setCarGrid={setCarGrid} makeList={makeList} /> : null}

          {!user ?
            <div >
              <button
              onClick={() => (setShowLogingModal(true))}
              className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                Log in
              </button>
            </div>
            :
            <div >
              <button 
              onClick={() => handleLogout()}
              className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                Log out
              </button>
            </div>
          }
          {showLoginModal ? <LoginFormModal setShowLoginModal={setShowLogingModal} /> : null}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false" >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">

              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/cars"
                className={`${showSearchDropdown ? "dark:text-white text-gray-900" : "text-blue-700 dark:text-blue-500"} block py-2 pl-3 pr-4 md:p-0 bg-blue-700 rounded md:bg-transparent`}
                aria-current="page"
              >
                Cars
              </a>
            </li>
            <li>
              <a onClick={() => { showSearchDropdown ? setShowSearchDropdown(false) : setShowSearchDropdown(true) }} className={`${showSearchDropdown && "md:text-blue-700 md:p-0 md:dark:text-blue-500"} hover:cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Search
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showSearchDropdown ? <SearchDropdown setCarGrid={setCarGrid} makeList={makeList} queryString={queryString} setQueryString={setQueryString} /> : null}
    </nav>
  );
};
