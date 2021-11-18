// Import the functions you need from the SDKs you need
import app from "./FirebaseConfig";
import { getAuth } from "firebase/auth";
const auth= getAuth(app);
export default auth;