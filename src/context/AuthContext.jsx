"use client"

import { createContext, useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJ1hOCj8mrw5meGQFZOZeV46G_8WxVusI",
  authDomain: "car-marketplace-web-lmkw.firebaseapp.com",
  projectId: "car-marketplace-web-lmkw",
  storageBucket: "car-marketplace-web-lmkw.appspot.com",
  messagingSenderId: "1042669946372",
  appId: "1:1042669946372:web:6eacf15519a61ec8fcd751"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const _setUser = () => {
    sessionStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      setUser(_user)
    })
  }, [])
  
  const handleLogin = (data) => {
    setUser(data.user);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {setUser(null)})
      .catch((error) => {
        console.error("Error signing out:", error)
      })
  };

  return <AuthContext.Provider value={{ user, setUser: _setUser, handleLogin, handleLogout }}>{children}</AuthContext.Provider>
};
