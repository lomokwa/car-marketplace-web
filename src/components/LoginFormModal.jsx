"use client"

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext, auth } from "@/context/AuthContext";

export default function LoginFormModal({ setShowLoginModal }) {
  const { handleLogin } = useContext(AuthContext)

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        handleLogin(result)
        // use router to send user back to home page
        setShowLoginModal(false);
      })
      .catch((err) => alert(err.message));
  };

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        handleLogin(result)
        // use router to send user back to home page
        setShowLoginModal(false);
      })
      .catch((err) => alert(err.message));
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
                Login
              </h3>

              <button
                onClick={() => setShowLoginModal(false)}
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
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="p-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

              </form>
            </div>

            {/*footer*/}
            <div className="flex justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowLoginModal(false)}>
                  Close
              </button>

              <button
                className="bg-purple-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={handleGoogle}
              >
                Login with Google
              </button>

              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={handleLoginWithEmailAndPassword}
              >
                Login with Email
              </button>
            
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70  fixed inset-0 z-40 bg-black"></div>
    </>
  );
};