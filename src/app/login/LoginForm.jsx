import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"


